import deeplake                                # to load PlantVillage dataset from Activeloop
import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D
from tensorflow.keras.models import Model
from tensorflow.keras.optimizers import Adam
from sklearn.model_selection import train_test_split
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import sys

# List of all PlantVillage classes
PLANTVILLAGE_CLASS_NAMES = [
    "Peach_healthy", "Strawberry_leaf_scorch", "Grape_black_measles",
    "Tomato_septoria_leaf_spot", "Grape_healthy", "Tomato_healthy",
    "Peach_bacterial_spot", "Corn_gray_leaf_spot", "Soybean_healthy",
    "Corn_common_rust", "Blueberry_healthy", "Corn_healthy",
    "Apple_healthy", "Apple_cedar_apple_rust", "Background_without_leaves",
    "Tomato_target_spot", "Pepper_healthy", "Grape_black_rot",
    "Apple_scab", "Raspberry_healthy", "Tomato_early_blight",
    "Tomato_yellow_leaf_curl_virus", "Corn_northern_leaf_blight",
    "Potato_healthy", "Tomato_late_blight", "Cherry_powdery_mildew",
    "Grape_leaf_blight", "Tomato_leaf_mold", "Pepper_bacterial_spot",
    "Potato_late_blight", "Tomato_mosaic_virus", "Potato_early_blight",
    "Tomato_bacterial_spot", "Strawberry_healthy", "Cherry_healthy",
    "Squash_powdery_mildew", "Tomato_spider_mites_two-spotted_spider_mite",
    "Orange_haunglongbing", "Apple_black_rot"
]

# function to map original PlantVillage class to 3-class labels
def map_to_three_classes(label_index):
    name = PLANTVILLAGE_CLASS_NAMES[label_index]
    if "healthy" in name and name != "Background_without_leaves":
        return 0  # Healthy
    elif name == "Background_without_leaves":
        return 2  # Unknown
    else:
        return 1  # Diseased

three_class_names = ["Healthy", "Diseased", "Unknown"]
num_classes = 3

# Load dataset from Activeloop with augmentation
print("Loading PlantVillage dataset (with augmentation) from Activeloop (read-only query)...")

# Use query for v3 dataset
results = deeplake.query('SELECT * FROM "hub://activeloop/plantvillage-with-augmentation"')

# EDA for DatasetView
sample = results[0]

print("\nInspecting known or common columns:")
for col in ["images", "labels", "metadata"]:
    try:
        val = sample[col]
        print(f"{col}: shape={val.shape}, dtype={val.dtype}")
    except Exception as e:
        print(f"Column '{col}' not found: {e}")

# Data loading with correct column names and access method
images = []
labels = []

# Process a subset of the dataset - increase but must have GPU/memory power
print("\nProcessing samples...")
for i, sample in enumerate(results):
    # Limit to 3000 samples for faster training
    if i >= 10000:
        break
    # get the image & label correctly
    image = sample["images"]                  # shape (256,256,3), dtype uint8
    label = sample["labels"][0]               # shape (1,), so take [0]

    # Check & reshape if necessary
    if image.shape != (256, 256, 3):
        print(f"Skipping sample {i}: unexpected image shape {image.shape}")
        continue

    # Map PlantVillage class to 3-class label
    label_3class = map_to_three_classes(label)
    images.append(image.astype(np.float32) / 255.0)  # normalize and cast
    labels.append(label_3class)

images = np.stack(images)  # now guaranteed to be rectangular
labels = np.array(labels)

print(f"\nDataset loaded: {images.shape[0]} images, shape per image: {images.shape[1:]}")

# Split dataset into training and validation sets
x_train, x_val, y_train, y_val = train_test_split(
    images, labels, test_size=0.2, random_state=42
)

# Convert labels to one-hot encoded format
y_train = tf.keras.utils.to_categorical(y_train, num_classes)
y_val = tf.keras.utils.to_categorical(y_val, num_classes)

# Define experiment configurations
experiment_configs = [
    {"epochs": 5, "batch_size": 32, "learning_rate": 0.0001},
    {"epochs": 10, "batch_size": 32, "learning_rate": 0.0001},
    {"epochs": 5, "batch_size": 64, "learning_rate": 0.0001},
    {"epochs": 5, "batch_size": 32, "learning_rate": 0.0005}
]

results_log = []
best_val_acc = 0
best_model = None
best_config = None

# Loop over configurations
for idx, config in enumerate(experiment_configs):
    print(f"\nStarting experiment {idx+1} with config: {config}")
    
    # Load base model
    base_model = MobileNetV2(
        weights='imagenet',
        include_top=False,
        input_shape=(256, 256, 3)
    )
    
    # Add layers on top
    x = base_model.output
    x = GlobalAveragePooling2D()(x)
    predictions = Dense(num_classes, activation='softmax')(x)

    # Final model
    model = Model(inputs=base_model.input, outputs=predictions)

    # Freeze base model layers so only top layers train
    for layer in base_model.layers:
        layer.trainable = False

    # Compile the model
    model.compile(
        optimizer=Adam(learning_rate=config["learning_rate"]),
        loss='categorical_crossentropy',
        metrics=['accuracy']
    )

    # Train the model
    print("Training model...")
    history = model.fit(
        x_train, y_train,
        validation_data=(x_val, y_val),
        epochs=config["epochs"],
        batch_size=config["batch_size"],
        verbose=1
    )

    # Get final metrics
    final_train_acc = history.history['accuracy'][-1]
    final_val_acc = history.history['val_accuracy'][-1]

    results_log.append({
        "Experiment": idx+1,
        "Epochs": config["epochs"],
        "Batch Size": config["batch_size"],
        "Learning Rate": config["learning_rate"],
        "Final Train Acc": final_train_acc,
        "Final Val Acc": final_val_acc
    })

    # Save model if best
    if final_val_acc > best_val_acc:
        best_val_acc = final_val_acc
        best_model = model
        best_config = config

# Save best model
best_model.save("../server/plant_doctor_best_model.h5")
print(f"\nBest model saved as plant_doctor_best_model.h5 with val_acc: {best_val_acc:.4f} and config: {best_config}")

# Save results to CSV
df = pd.DataFrame(results_log)
df.to_csv("training_results.csv", index=False)
print("All experiment results saved to training_results.csv")

# Plot results
plt.figure(figsize=(8,6))
plt.bar([f"Exp {r['Experiment']}" for r in results_log], [r['Final Val Acc'] for r in results_log])
plt.title("Validation Accuracy per Experiment")
plt.ylabel("Validation Accuracy")
plt.savefig("training_results.png")
print("Validation accuracy plot saved as training_results.png")
plt.show()

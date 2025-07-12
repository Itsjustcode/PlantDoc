from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import os

# Flask application instance
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS)
CORS(app)

# Load trained model at startup
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'plant_doctor_best_model.h5')
model = tf.keras.models.load_model(MODEL_PATH)

# Main 3-class labels
class_labels = ["Healthy", "Diseased", "Unknown"]

# function to preprocess uploaded image
def preprocess_image(image_path):
    img = Image.open(image_path).convert("RGB")
    img = img.resize((256, 256))  # Resize to match model's input
    img_array = np.array(img) / 255.0  # Normalize pixel values
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    return img_array

# route to confirm server is running
@app.route("/hello", methods=["GET"])
def hello():
    return jsonify({"message": "Hello from Flask backend!"})

# Predict route to handle image upload and return a prediction
@app.route("/predict", methods=["POST"])
def predict():
    # Check if 'image' is in the request
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    uploaded_image_file = request.files['image']
    uploaded_filename = uploaded_image_file.filename

    # Save uploaded image to disk
    uploads_folder = os.path.join(os.path.dirname(__file__), 'uploads')
    os.makedirs(uploads_folder, exist_ok=True)
    image_path = os.path.join(uploads_folder, uploaded_filename)
    uploaded_image_file.save(image_path)

    # Preprocess the image
    img_array = preprocess_image(image_path)

    # Make prediction
    predictions = model.predict(img_array)[0]  # First batch element
    predicted_index = int(np.argmax(predictions))
    predicted_label = class_labels[predicted_index]
    confidence_scores = {class_labels[i]: float(predictions[i]) for i in range(len(class_labels))}

    # delete the uploaded image after processing
    os.remove(image_path)

    # Return prediction result
    prediction_result = {
        "label": predicted_label,
        "confidence": confidence_scores,
        "filename": uploaded_filename
    }

    # Send the prediction result back as JSON
    return jsonify(prediction_result)

# Run the app
if __name__ == "__main__":
    app.run(debug=True)



#    """
#    A test route
#    must visit http://localhost:3000 in browser.
#    """
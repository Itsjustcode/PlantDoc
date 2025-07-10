from flask import Flask, request, jsonify
from flask_cors import CORS

# Flask application instance
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS)
CORS(app)

# route to confirm server is running
@app.route("/hello", methods=["GET"])
def hello():
    return jsonify({"message": "Hello from Flask backend!"})

# Predict route to handle image upload and return a mock prediction
@app.route("/predict", methods=["POST"])
def predict():
    # Check if 'image' is in the request
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    uploaded_image_file = request.files['image']
    uploaded_filename = uploaded_image_file.filename

    # Return a mock prediction result
    prediction_result = {
        "label": "Diseased",
        "confidence": {
            "Healthy": 0.1,
            "Nutrient Deficient": 0.2,
            "Diseased": 0.7
        },
        "filename": uploaded_filename
    }

    # Send the prediction result back as JSON
    return jsonify(prediction_result)

# Run the app
if __name__ == "__main__":
    app.run(debug=True)





#    """
#    A test route
#    must visit http://127.0.0.1:5000/hello in browser.
#    """
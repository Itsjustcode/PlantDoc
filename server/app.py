from flask import Flask, jsonify
from flask_cors import CORS

# Flask application instance
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS)
CORS(app)

# route to test the backend
@app.route('/hello', methods=['GET'])
def hello():
    """
    A test route
    must visit http://127.0.0.1:5000/hello in browser.
    """
    return jsonify({"message": "Hello from Flask backend!"})

# Run the app
if __name__ == '__main__':
    app.run(debug=True)

import React, { useState } from "react";

function App() {
  // Store selected file from file input
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  // Store response from backend
  const [predictionResponse, setPredictionResponse] = useState(null);

  // When user selects an image file
  const handleImageSelection = (event) => {
    setSelectedImageFile(event.target.files[0]);
  };

  // When user clicks the upload button
  const handleUploadAndPredict = async () => {
    // Make sure an image is selected
    if (!selectedImageFile) {
      alert("Please select an image file first.");
      return;
    }

    // Create a object to send file to backend
    const formData = new FormData();
    formData.append("image", selectedImageFile);

    try {
      // Send POST request to backend
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      // Parse the JSON response
      const data = await response.json();

      // Save response in state
      setPredictionResponse(data);

    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1> Plant Doctor AI</h1>

      {/* File input for selecting image */}
      <input type="file" accept="image/*" onChange={handleImageSelection} />

      {/* Upload button */}
      <button onClick={handleUploadAndPredict} style={{ marginLeft: "1rem" }}>
        Upload & Diagnose
      </button>

      {/* Display prediction result */}
      {predictionResponse && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Prediction: {predictionResponse.label}</h2>
          <h3>Confidence Scores:</h3>
          <pre>{JSON.stringify(predictionResponse.confidence, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

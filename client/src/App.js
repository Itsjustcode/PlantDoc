import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  // Store selected file from file input or drag & drop
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  // Store response from backend
  const [predictionResponse, setPredictionResponse] = useState(null);

  // When user selects an image file (via file input)
  const handleImageSelection = (event) => {
    setSelectedImageFile(event.target.files[0]);
  };

  // When user drags & drops a file
  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedImageFile(event.dataTransfer.files[0]);
  };

  // Prevent default browser behavior for drag over
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Reset the file selection and prediction response
  const handleCancel = () => {
    setSelectedImageFile(null);
    setPredictionResponse(null);
  };

  // When user clicks the upload button
  const handleUploadAndPredict = async () => {
    // Make sure an image is selected
    if (!selectedImageFile) {
      alert("Please select or drop an image file first.");
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
      alert("Failed to upload image.");
    }
  };

  // Prepare data for Pie chart if predictionResponse is available
  const chartData = predictionResponse
    ? {
        labels: Object.keys(predictionResponse.confidence),
        datasets: [
          {
            data: Object.values(predictionResponse.confidence),
            backgroundColor: ["#4CAF50", "#FFC107", "#F44336"], // green, yellow, red
            hoverOffset: 4,
          },
        ],
      }
    : null;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1> Plant Doctor AI</h1>

      {/* Drag & Drop Area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: "2px dashed #ccc",
          borderRadius: "8px",
          padding: "2rem",
          textAlign: "center",
          marginBottom: "1rem",
          cursor: "pointer",
          backgroundColor: "#f9f9f9",
        }}
      >
        {selectedImageFile ? (
          <p>{selectedImageFile.name}</p>
        ) : (
          <p>Drag & Drop your image here, or use file input below</p>
        )}
      </div>

      {/* File input for selecting image */}
      <input type="file" accept="image/*" onChange={handleImageSelection} />

      {/* Image preview */}
      {selectedImageFile && (
        <div style={{ marginTop: "1rem" }}>
          <img
            src={URL.createObjectURL(selectedImageFile)}
            alt="Preview"
            width="200"
            style={{ borderRadius: "8px", marginTop: "1rem" }}
          />
        </div>
      )}

      {/* Buttons */}
      <div style={{ marginTop: "1rem" }}>
        <button onClick={handleUploadAndPredict} style={{ marginRight: "1rem" }}>
          Upload & Diagnose
        </button>
        <button onClick={handleCancel}>Cancel</button>
      </div>

      {/* Display prediction result */}
      {predictionResponse && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Prediction: {predictionResponse.label}</h2>
          <h3>Confidence Scores:</h3>

          {/* Pie Chart */}
          <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <Pie data={chartData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

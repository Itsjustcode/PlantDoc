import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // NEW loading state
  const navigate = useNavigate();

  // Handle file input change
  const handleFileChange = (e) => {
    setSelectedImage(e.target.files[0]);
    setErrorMessage("");
  };

  // Handle drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    setSelectedImage(e.dataTransfer.files[0]);
    setErrorMessage("");
  };

  // Prevent default for drag over
  const handleDragOver = (e) => e.preventDefault();

  // Cancel/reset
  const handleCancel = () => {
    setSelectedImage(null);
    setErrorMessage("");
  };

  // Handle Upload & Prediction
  const handleUpload = async () => {
    if (!selectedImage) {
      setErrorMessage("Please select or drop an image first.");
      return;
    }
    setLoading(true);
    setErrorMessage("");
    const formData = new FormData();
    formData.append("image", selectedImage);
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setLoading(false);
      if (response.ok) {
        // Redirect to results page and pass prediction result
        navigate("/results", { state: { prediction: data, uploadedImage: URL.createObjectURL(selectedImage) } });
      } else {
        setErrorMessage(data.error || "Prediction failed.");
      }
    } catch {
      setLoading(false);
      setErrorMessage("Error uploading image.");
    }
  };

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      padding: "2rem 1rem",
      maxWidth: "500px",
      margin: "0 auto",
      textAlign: "center"
    }}>
      <h1>Upload Your Plant Leaf Photo</h1>
      <p>
        Take or upload a clear photo of your plant's leaf to diagnose its health.<br />
        Supported formats: JPG, PNG. Max size: 5MB
      </p>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: "2px dashed #ccc",
          borderRadius: "8px",
          padding: "2rem",
          marginBottom: "1rem",
          cursor: "pointer",
          background: "#f9f9f9"
        }}
      >
        {selectedImage
          ? <div>{selectedImage.name}</div>
          : <div>Drag &amp; Drop your image here, or click below to browse</div>
        }
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ marginBottom: "1rem" }}
        disabled={loading}
      />
      {selectedImage && (
        <div style={{ marginTop: "1rem" }}>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
            width={200}
            style={{ borderRadius: "8px" }}
          />
        </div>
      )}
      <div style={{ marginTop: "1.5rem" }}>
        <button onClick={handleUpload} style={{ marginRight: "1rem" }} disabled={loading}>
          {loading ? "Analyzing..." : "Upload"}
        </button>
        <button onClick={handleCancel} disabled={loading}>Cancel</button>
      </div>
      {loading && (
        <div style={{ marginTop: "1rem" }}>
          <div style={{
            border: "4px solid #eee",
            borderTop: "4px solid #388e3c",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            animation: "spin 1s linear infinite",
            margin: "0 auto"
          }} />
          <p style={{ color: "#388e3c", fontWeight: "bold" }}>Analyzing Image...</p>
        </div>
      )}
      {errorMessage && (
        <div style={{ color: "red", marginTop: "1rem", fontWeight: "bold" }}>
          {errorMessage}
        </div>
      )}

      {/* Spinner animation keyframes */}
      <style>
        {`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        `}
      </style>
    </div>
  );
}

export default Upload;

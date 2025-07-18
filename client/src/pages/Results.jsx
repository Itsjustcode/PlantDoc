import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PredictionResult from "../components/PredictionResult";

function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  // Fallback demo data if not passed via navigation
  const prediction = location.state?.prediction || {
    label: "Diseased",
    confidence: {
      Healthy: 0.15,
      Diseased: 0.65,
      Unknown: 0.20
    },
    filename: "leaf_example.png"
  };
  const uploadedImage = location.state?.uploadedImage || null;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem 1rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Diagnosis Results</h1>
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <button
          onClick={() => navigate("/upload")}
          style={{
            background: "#222",
            color: "#fff",
            padding: "0.7rem 1.5rem",
            border: "none",
            borderRadius: "7px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Diagnose Another Leaf
        </button>
      </div>

      <PredictionResult result={prediction} uploadedImage={uploadedImage} />

      {/* User Feedback */}
      <section style={{ marginTop: "2rem" }}>
        <h2>User Feedback</h2>
        <p>Let us know how accurate this diagnosis was!</p>
        <button style={{ marginRight: "1rem" }}>👍 Rate Positive</button>
        <button>👎 Rate Negative</button>
      </section>
    </div>
  );
}

export default Results;

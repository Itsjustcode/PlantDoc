import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PredictionResult from "../components/PredictionResult";

function Results() {
  // This would come from actual state in a real app; here we'll check location.state for demo
  const location = useLocation();
  const navigate = useNavigate();
  // Use sample data if none is passed (for testing)
  const prediction = location.state?.prediction || {
    label: "Diseased",
    confidence: {
      Healthy: 15,
      Deficient: 20,
      Diseased: 65
    },
    filename: "leaf_example.png"
  };

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

      <PredictionResult prediction={prediction} />

      {/* Tips & Recommendations */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Tips & Recommendations</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ flex: 1, background: "#f6f6f6", padding: "1rem", borderRadius: "8px" }}>
            <strong>Actionable Advice</strong>
            <div>
              {prediction.label === "Diseased"
                ? "Remove affected leaves and isolate plant to prevent spread."
                : prediction.label === "Deficient"
                ? "Check soil nutrients and adjust watering/fertilizer."
                : "Keep up the good care!"}
            </div>
          </div>
        </div>
      </section>

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

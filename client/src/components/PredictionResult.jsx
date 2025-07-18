import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required Chart.js parts
ChartJS.register(ArcElement, Tooltip, Legend);

function PredictionResult({ result, uploadedImage }) {
  if (!result) return null; // Nothing to show if result doesn't exist

  // Colors for each category
  const pieColors = {
    Healthy: "#4CAF50",      // green
    Diseased: "#F44336",     // red
    Unknown: "#9E9E9E"       // gray
  };

  // Prepare chart data
  const chartData = {
    labels: Object.keys(result.confidence),
    datasets: [
      {
        data: Object.values(result.confidence),
        backgroundColor: Object.keys(result.confidence).map(
          (cat) => pieColors[cat] || "#90A4AE"
        ),
        hoverOffset: 4,
      },
    ],
  };

  // Sample actionable tips (could be dynamic based on result.label)
  const actionableAdvice = {
    Healthy: "Your plant leaf looks healthy. Keep following good care practices!",
    Diseased: "Remove affected leaves and isolate plant to prevent spread.",
    Unknown: "Try uploading a clearer image, or consult a plant expert."
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Diagnosis Results</h2>
      <div style={{ margin: "2rem 0" }}>
        <div style={{ maxWidth: "350px", margin: "0 auto" }}>
          <Pie data={chartData} />
        </div>
      </div>
      <h3>
        Prediction:{" "}
        <span style={{ color: pieColors[result.label] || "#333" }}>
          {result.label}
        </span>
      </h3>
      <div style={{ margin: "1rem 0", fontSize: "1.1rem" }}>
        Confidence Levels:{" "}
        {Object.entries(result.confidence)
          .map(([key, val]) => `${key}: ${(val * 100).toFixed(1)}%`)
          .join(", ")}
      </div>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {/* Uploaded Image */}
        {uploadedImage && (
          <div>
            <h4>Analyzed Image</h4>
            <img
              src={uploadedImage}
              alt="Analyzed leaf"
              width="160"
              style={{ borderRadius: "8px", border: "1px solid #ddd" }}
            />
          </div>
        )}

        {/* Tips & Recommendations */}
        <div>
          <h4>Tips & Recommendations</h4>
          <div style={{
            background: "#f7fff7",
            border: "1px solid #e0ffe0",
            padding: "1rem",
            borderRadius: "8px",
            maxWidth: "300px"
          }}>
            {actionableAdvice[result.label]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PredictionResult;

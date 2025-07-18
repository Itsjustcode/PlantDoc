import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required Chart.js parts
ChartJS.register(ArcElement, Tooltip, Legend);

function PredictionResult({ result, uploadedImage }) {
  if (!result) return null; // Nothing to show if result doesn't exist

  // Pie chart colors
  const pieColors = {
    Healthy: "#4CAF50",
    Diseased: "#F44336",
    Unknown: "#9E9E9E"
  };

  // Prepare chart data
  const rawVals = Object.values(result.confidence);
  // If values are already between 0-1, skip normalization
  const sum = rawVals.reduce((a, b) => a + b, 0);
  const isFractional = rawVals.every((v) => v <= 1);
  const chartData = {
    labels: Object.keys(result.confidence),
    datasets: [
      {
        data: isFractional
          ? rawVals.map((v) => Math.round(v * 100))
          : rawVals,
        backgroundColor: Object.keys(result.confidence).map(
          (cat) => pieColors[cat] || "#90A4AE"
        ),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <h2>
        Prediction:{" "}
        <span style={{ color: pieColors[result.label] || "#333" }}>
          {result.label}
        </span>
      </h2>
      <div style={{ maxWidth: "350px", margin: "2rem auto" }}>
        <Pie data={chartData} />
      </div>
      <div style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
        Confidence Levels:{" "}
        {Object.entries(result.confidence)
          .map(([key, val]) => {
            const percent = isFractional ? (val * 100).toFixed(1) : val;
            return `${key}: ${percent}%`;
          })
          .join(", ")}
      </div>
      {uploadedImage && (
        <div>
          <h4>Analyzed Image</h4>
          <img
            src={uploadedImage}
            alt="Analyzed leaf"
            width="160"
            style={{ borderRadius: "8px", border: "1px solid #ddd", marginBottom: "1.5rem" }}
          />
        </div>
      )}
    </div>
  );
}

export default PredictionResult;

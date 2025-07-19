import React from "react";
import { useNavigate } from "react-router-dom";
import PlantTypes from "../components/PlantTypes";
import FeedbackList from "../components/FeedbackList";

function Home() {
  const navigate = useNavigate();

  // When user clicks "Start Diagnosis"
  const handleStartDiagnosis = () => {
    navigate("/upload");
  };

  // When user clicks "Learn More"
  const handleLearnMore = () => {
    navigate("/learn-more");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Hero Section */}
      <section style={{ background: "#00BB7D", color: "#fff", padding: "3rem 1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Diagnose Your Plant's Health
        </h1>
        <p style={{ marginBottom: "2rem" }}>
          Upload a picture of your plant leaf and let our AI determine its status.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <button
            onClick={handleLearnMore}
            style={{
              background: "transparent",
              border: "2px solid #fff",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Learn More
          </button>
          <button
            onClick={handleStartDiagnosis}
            style={{
              background: "#000",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Start Diagnosis
          </button>
        </div>
      </section>

      {/* Popular Plant Types Section */}
      <section style={{ maxWidth: "900px", margin: "3rem auto 0 auto", padding: "0 1rem" }}>
        <h2 style={{ fontSize: "1.7rem" }}>Popular Plant Types</h2>
        <p style={{ marginBottom: "2rem" }}>Get instant help for common houseplants.</p>
        {/* showing plant types */}
        <PlantTypes />
      </section>

      {/* User Feedback Section */}
      <section style={{ maxWidth: "900px", margin: "3rem auto", padding: "0 1rem" }}>
        <h2>User Feedback</h2>
        <p>See what our users are saying.</p>
        {/* showing feedback/testimonials */}
        <FeedbackList />
      </section>
    </div>
  );
}

export default Home;

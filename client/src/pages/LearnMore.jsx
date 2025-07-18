import React from "react";

function LearnMore() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem 1rem", maxWidth: "1100px", margin: "0 auto" }}>
      {/* How it helps section */}
      <section style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          How Plant Doctor AI Helps You Grow Healthier Plants
        </h1>
        <p style={{ fontSize: "1.1rem" }}>
          Learn how our AI-powered tool diagnoses plant health and helps you take care of your plants.
        </p>
      </section>

      {/* What is Plant Doctor AI */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.4rem" }}>What is Plant Doctor AI?</h2>
        <div style={{ background: "#f6f6f6", padding: "1rem", borderRadius: "8px", marginTop: "0.5rem" }}>
          Plant Doctor AI is an AI-powered web application that analyzes leaf photos to detect plant health conditions such as healthy, nutrient-deficient, or diseased.
        </div>
      </section>

      {/* How does it work */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.4rem" }}>How Does It Work?</h2>
        <div style={{ display: "flex", gap: "2rem", marginTop: "1rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 180px", minWidth: "180px", background: "#e8f5e9", padding: "1rem", borderRadius: "8px" }}>
            <strong>Step 1</strong>
            <div>Upload your leaf photo</div>
          </div>
          <div style={{ flex: "1 1 180px", minWidth: "180px", background: "#e3f2fd", padding: "1rem", borderRadius: "8px" }}>
            <strong>Step 2</strong>
            <div>AI analyzes the image</div>
          </div>
          <div style={{ flex: "1 1 180px", minWidth: "180px", background: "#fff3e0", padding: "1rem", borderRadius: "8px" }}>
            <strong>Step 3</strong>
            <div>Get your diagnosis and recommendations</div>
          </div>
        </div>
      </section>

      {/* Why Use It */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.4rem" }}>Why Use It?</h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "1rem" }}>
          <div style={{ flex: "1 1 180px", minWidth: "180px", background: "#f1f8e9", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
            <span role="img" aria-label="check" style={{ fontSize: "2rem" }}>✅</span><br />
            Early detection of plant problems
          </div>
          <div style={{ flex: "1 1 180px", minWidth: "180px", background: "#fffde7", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
            <span role="img" aria-label="money" style={{ fontSize: "2rem" }}>💰</span><br />
            Saves time and money
          </div>
          <div style={{ flex: "1 1 180px", minWidth: "180px", background: "#e3f2fd", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
            <span role="img" aria-label="thumb" style={{ fontSize: "2rem" }}>👍</span><br />
            Easy to use, even for beginners
          </div>
          <div style={{ flex: "1 1 180px", minWidth: "180px", background: "#fce4ec", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
            <span role="img" aria-label="device" style={{ fontSize: "2rem" }}>📱</span><br />
            Works on desktop and mobile
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.4rem" }}>Behind the Scenes</h2>
        <div style={{ background: "#f6f6f6", padding: "1rem", borderRadius: "8px", marginTop: "0.5rem" }}>
          Plant Doctor AI uses advanced artificial intelligence technology to analyze leaf images and diagnose plant health.
          <br /><br />
          We trained our model on the PlantVillage dataset, a large collection of real, labeled plant leaf images showing healthy, nutrient-deficient, and diseased conditions.
          <br /><br />
          When you upload a photo, our AI processes the image, compares it against thousands of examples it has learned from, and predicts which category your plant leaf falls into along with a confidence score for each possible result.
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <h2>Try Plant Doctor AI Now</h2>
        <button
          onClick={() => window.location.href = "/upload"}
          style={{
            background: "#222",
            color: "#fff",
            padding: "0.9rem 2rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "1rem",
            fontSize: "1.2rem"
          }}
        >
          Get Started
        </button>
      </section>
    </div>
  );
}

export default LearnMore;

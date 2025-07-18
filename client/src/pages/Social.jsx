import React from "react";

function Social() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem 1rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Follow Us on Social Media!</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Stay connected with us through our various social media platforms.
      </p>

      <section style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        {/* Facebook */}
        <div style={{ minWidth: "220px", flex: 1 }}>
          <span role="img" aria-label="facebook" style={{ fontSize: "2rem" }}>📘</span>
          <strong style={{ marginLeft: "0.5rem" }}>Facebook</strong>
          <div>
            <a href="https://facebook.com/PlantDoctorAI" target="_blank" rel="noopener noreferrer">
              facebook.com/PlantDoctorAI
            </a>
          </div>
        </div>
        {/* Instagram */}
        <div style={{ minWidth: "220px", flex: 1 }}>
          <span role="img" aria-label="instagram" style={{ fontSize: "2rem" }}>📸</span>
          <strong style={{ marginLeft: "0.5rem" }}>Instagram</strong>
          <div>
            <a href="https://instagram.com/PlantDoctorAI" target="_blank" rel="noopener noreferrer">
              instagram.com/PlantDoctorAI
            </a>
          </div>
        </div>
        {/* X (Twitter) */}
        <div style={{ minWidth: "220px", flex: 1 }}>
          <span role="img" aria-label="twitter" style={{ fontSize: "2rem" }}>❌</span>
          <strong style={{ marginLeft: "0.5rem" }}>X</strong>
          <div>
            <a href="https://x.com/PlantDoctorAI" target="_blank" rel="noopener noreferrer">
              X.com/PlantDoctorAI
            </a>
          </div>
        </div>
        {/* LinkedIn */}
        <div style={{ minWidth: "220px", flex: 1 }}>
          <span role="img" aria-label="linkedin" style={{ fontSize: "2rem" }}>💼</span>
          <strong style={{ marginLeft: "0.5rem" }}>LinkedIn</strong>
          <div>
            <a href="https://linkedin.com/company/PlantDoctorAI" target="_blank" rel="noopener noreferrer">
              linkedin.com/company/PlantDoctorAI
            </a>
          </div>
        </div>
      </section>

      {/* Community note */}
      <div style={{
        background: "#f6f6f6",
        padding: "2rem",
        borderRadius: "10px",
        textAlign: "center",
        marginTop: "2.5rem"
      }}>
        <strong>
          Join our plant-loving community to share your experiences and learn from others!
        </strong>
      </div>
    </div>
  );
}

export default Social;

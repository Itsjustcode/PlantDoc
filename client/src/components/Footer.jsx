import React from "react";

function Footer() {
  return (
    <footer style={{
      background: "#f3f3f3",
      padding: "2rem 1rem",
      marginTop: "3rem",
      fontSize: "1rem",
      color: "#333"
    }}>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
        alignItems: "center"
      }}>
        <a href="/privacy" style={{ textDecoration: "none", color: "#333" }}>Privacy Policy</a>
        <a href="/terms" style={{ textDecoration: "none", color: "#333" }}>Terms of Service</a>
        <span>Follow us on social media!</span>
        <span>Contact: info@plantdoctor.ai</span>
      </div>
      <div style={{ textAlign: "center", marginTop: "1rem", color: "#888", fontSize: "0.9rem" }}>
        © 2025 Plant Doctor AI. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

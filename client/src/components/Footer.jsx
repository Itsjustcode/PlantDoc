import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{
      background: "#f7f7f7",
      padding: "1.5rem 0 0.5rem 0",
      fontSize: "1rem",
      color: "#222",
      textAlign: "center"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "2.5rem",
        flexWrap: "wrap"
      }}>
        <Link to="/privacy" style={{ color: "#222", textDecoration: "none" }}>Privacy Policy</Link>
        <Link to="/terms" style={{ color: "#222", textDecoration: "none" }}>Terms of Service</Link>
        <Link to="/social" style={{ color: "#222", textDecoration: "none" }}>
          Follow us on social media!
        </Link>
        <span>Contact: info@plantdoctor.ai</span>
      </div>
      <div style={{ marginTop: "1rem", fontSize: "0.95rem", color: "#888" }}>
        © 2025 Plant Doctor AI. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

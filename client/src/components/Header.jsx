import React from "react";
import { Link } from "react-router-dom";
import logo from "../PlantDoctorAI.png";

function Header() {
  return (
    <header style={{
      background: "#00BB7D",
      color: "#fff",
      padding: "1rem 0",
      marginBottom: "2rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
    }}>
      <nav style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <Link to="/" style={{
          textDecoration: "none",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "1.4rem",
          letterSpacing: "1px"
        }}>
          <img 
            src={logo} 
            alt="Plant Doctor AI Logo" 
            style={{ height: "36px", marginRight: "0.6rem" }} 
          />
          Plant Doctor AI
        </Link>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
          <Link to="/learn-more" style={{ color: "#fff", textDecoration: "none" }}>Learn More</Link>
          <Link to="/upload" style={{ color: "#fff", textDecoration: "none" }}>Diagnose</Link>
          <Link to="/social" style={{ color: "#fff", textDecoration: "none" }}>Social</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

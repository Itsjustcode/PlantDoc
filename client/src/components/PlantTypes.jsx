// src/components/PlantTypes.jsx

import React from "react";
import snakePlantImg from "../assets/snakeplant.jpg";
import peaceLilyImg from "../assets/PeaceLily.jpg";
import cactusImg from "../assets/Cactus.jpg";
import aloeVeraImg from "../assets/AloeVera.jpg";

// List of popular plant types with images, names, and notes
const plantTypes = [
  {
    img: snakePlantImg,
    name: "Snake Plant",
    subtitle: "Low maintenance",
    note: "Great for beginners",
  },
  {
    img: peaceLilyImg,
    name: "Peace Lily",
    subtitle: "Air purifier",
    note: "Flowering plant",
  },
  {
    img: cactusImg,
    name: "Cactus",
    subtitle: "Desert plant",
    note: "Requires minimal water",
  },
  {
    img: aloeVeraImg,
    name: "Aloe Vera",
    subtitle: "Healing plant",
    note: "Useful gel",
  },
];

function PlantTypes() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "2rem",
        margin: "2rem 0",
      }}
    >
      {plantTypes.map((plant) => (
        <div
          key={plant.name}
          style={{
            background: "#f8f8f8",
            borderRadius: "1.2rem",
            padding: "2rem 1rem",
            textAlign: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          }}
        >
          <img
            src={plant.img}
            alt={plant.name}
            style={{
              width: "68px",
              height: "68px",
              objectFit: "cover",
              borderRadius: "1rem",
              marginBottom: "0.8rem",
            }}
          />
          <h3 style={{ margin: "0.7rem 0 0.3rem 0" }}>{plant.name}</h3>
          <div style={{ fontSize: "1rem", color: "#357a38", marginBottom: "0.2rem" }}>
            {plant.subtitle}
          </div>
          <div style={{ fontWeight: "bold" }}>{plant.note}</div>
        </div>
      ))}
    </div>
  );
}

export default PlantTypes;

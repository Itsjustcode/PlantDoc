import React from "react";

function FeedbackList() {
  // Example feedbacks (could be passed as props in future)
  const feedbacks = [
    { name: "Alice", rating: 5, comment: "Quick diagnosis and very accurate!" },
    { name: "Bob", rating: 5, comment: "Loved the interface, very user-friendly." },
    { name: "Charlie", rating: 5, comment: "Helped me save my plant! Thank you!" },
    { name: "Diana", rating: 5, comment: "Easy to use and informative." }
  ];

  return (
    <section>
      <h2 style={{ marginBottom: "1rem" }}>User Feedback</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center"
      }}>
        {feedbacks.map((fb, idx) => (
          <div key={idx} style={{
            background: "#fafafa",
            borderRadius: "10px",
            padding: "1rem 1.5rem",
            minWidth: "220px",
            maxWidth: "320px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
          }}>
            <div style={{ fontWeight: "bold" }}>{fb.name}{" "}
              <span aria-label="stars" title="rating">
                {Array(fb.rating).fill("⭐").join("")}
              </span>
            </div>
            <div style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
              {fb.comment}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeedbackList;

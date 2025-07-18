import React from "react";

function Terms() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem 1rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Terms of Service</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Please read our terms of service carefully before using our platform.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Acceptance of Terms</h2>
        <div style={{ background: "#f6f6f6", padding: "1rem", borderRadius: "8px" }}>
          By accessing or using the Plant Doctor AI service, you agree to be bound by these Terms of Service.
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Service Description</h2>
        <div style={{ background: "#f6f6f6", padding: "1rem", borderRadius: "8px" }}>
          Plant Doctor AI provides a web-based tool to analyze images of plant leaves and generate a prediction of their health status (Healthy, Nutrient Deficient, Diseased) using AI.
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>User Responsibilities</h2>
        <div style={{ background: "#f6f6f6", padding: "1rem", borderRadius: "8px" }}>
          Users agree to upload only images they have the right to use and not to upload any content that is illegal, offensive, or harmful.
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>No Guarantee</h2>
        <div style={{ background: "#f6f6f6", padding: "1rem", borderRadius: "8px" }}>
          The service does not guarantee the accuracy, completeness, or usefulness of predictions.
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Limitation of Liability</h2>
        <div style={{ background: "#f6f6f6", padding: "1rem", borderRadius: "8px" }}>
          The developers are not responsible for any damages, losses, or decisions made based on the app’s output.
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Privacy</h2>
        <div style={{ background: "#f6f6f6", padding: "1rem", borderRadius: "8px" }}>
          Uploaded images are processed temporarily and not stored permanently. The app may use cookies and basic analytics to improve the service.
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Changes to Terms</h2>
        <div style={{ background: "#f6f6f6", padding: "1rem", borderRadius: "8px" }}>
          These Terms of Service may be updated at any time, with changes effective immediately upon posting. Users who do not agree to the terms should not use the service.
        </div>
      </section>

      <section>
        <h2>Contact Us</h2>
        <div style={{ background: "#f6f6f6", padding: "1rem", borderRadius: "8px" }}>
          For support or questions, please contact us at: support@plantdoctorai.com
        </div>
      </section>
    </div>
  );
}

export default Terms;

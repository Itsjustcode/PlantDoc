import React from "react";

function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem 1rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Privacy Policy</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        We respect your privacy and are committed to protecting your personal data. Please take a moment to read our policy.
      </p>
      
      {/* Information Collected */}
      <h2>Information Collected</h2>
      <div style={{ marginBottom: "1.5rem" }}>
        <strong>Uploaded Images:</strong> You can upload photos of plant leaves to receive an AI-generated health diagnosis. These images are processed temporarily and not stored permanently.
        <br />
        <strong>Technical Data:</strong> We may collect basic technical data, such as your IP address and browser information, for analytics and security purposes.
      </div>
      
      {/* How We Use Your Information */}
      <h2>How We Use Your Information</h2>
      <div style={{ marginBottom: "1.5rem" }}>
        <strong>AI Diagnoses:</strong> Uploaded images are analyzed to provide a diagnosis: Healthy, Nutrient Deficient, or Diseased.
        <br />
        <strong>Analytics:</strong> Technical data helps us monitor and enhance service performance.
      </div>

      {/* Sharing of Information */}
      <h2>Sharing of Information</h2>
      <div style={{ marginBottom: "1.5rem" }}>
        <strong>No Sale of Data:</strong> We do not sell or share your personal data with third parties, except when required by law.
      </div>

      {/* Data Retention */}
      <h2>Data Retention</h2>
      <div style={{ marginBottom: "1.5rem" }}>
        <strong>Temporary Processing:</strong> Images are processed temporarily, and no personal data is retained permanently.
      </div>

      {/* Your Choices */}
      <h2>Your Choices</h2>
      <div style={{ marginBottom: "1.5rem" }}>
        <strong>Opt-Out Option:</strong> You have the right to not use our service if you disagree with our policy.
        <br />
        <strong>Contact Us:</strong> For any privacy concerns, please reach out to us via the contact information below.
      </div>

      {/* Contact Info */}
      <h2>Contact Us</h2>
      <div style={{ marginBottom: "1.5rem" }}>
        <strong>Email Us:</strong> Support@PlantDoctor.AI
        <br />
        <strong>Last Updated:</strong> 07/01/2025
      </div>
    </div>
  );
}

export default PrivacyPolicy;

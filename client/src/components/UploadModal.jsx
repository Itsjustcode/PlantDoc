import React from "react";

// Props: open (bool), onClose (function), onUpload (function), fileInputRef (React ref), errorMessage (string)
function UploadModal({ open, onClose, onUpload, fileInputRef, errorMessage }) {
  if (!open) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.3)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "#fff",
        padding: "2rem",
        borderRadius: "12px",
        minWidth: "320px",
        maxWidth: "95vw",
        boxShadow: "0 4px 24px rgba(0,0,0,0.09)"
      }}>
        <h2 style={{ marginTop: 0 }}>Upload Your Plant Leaf Photo</h2>
        <p>
          Take or upload a clear photo of your plant's leaf to diagnose its health.<br />
          Supported formats: JPG, PNG. Max size: 5MB
        </p>
        <input type="file" accept="image/*" ref={fileInputRef} />
        {errorMessage && (
          <div style={{ color: "red", marginTop: "0.8rem" }}>{errorMessage}</div>
        )}
        <div style={{
          marginTop: "1.5rem",
          display: "flex", gap: "1rem", justifyContent: "flex-end"
        }}>
          <button onClick={onClose} style={{
            background: "#fff", border: "1px solid #888", borderRadius: "6px",
            padding: "0.5rem 1.5rem", cursor: "pointer"
          }}>Cancel</button>
          <button onClick={onUpload} style={{
            background: "#388e3c", color: "#fff", border: "none", borderRadius: "6px",
            padding: "0.5rem 1.5rem", cursor: "pointer"
          }}>Upload</button>
        </div>
      </div>
    </div>
  );
}

export default UploadModal;

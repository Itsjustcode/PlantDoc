import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Results from "./pages/Results";
import LearnMore from "./pages/LearnMore";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Social from "./pages/Social";
import Terms from "./pages/Terms";

// The main App component sets up routes and shared layout
function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          {/* Main landing page */}
          <Route path="/" element={<Home />} />

          {/* Upload page (where user uploads plant image) */}
          <Route path="/upload" element={<Upload />} />

          {/* Show results after diagnosis */}
          <Route path="/results" element={<Results />} />

          {/* Learn more/about page */}
          <Route path="/learn-more" element={<LearnMore />} />

          {/* Privacy policy page */}
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Terms of service page */}
          <Route path="/terms" element={<Terms />} />

          {/* Social media links page */}
          <Route path="/social" element={<Social />} />

          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

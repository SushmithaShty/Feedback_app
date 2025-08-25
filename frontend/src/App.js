import React, { useEffect, useState } from "react";
import axios from "axios";
import FeedbackForm from "./Components/FeedbackForm";
import GoogleForm from "./Components/GoogleForm";
import { DropdownMenu } from "./Components/SideButton";

function App() {
  const [message, setMessage] = useState("");
  const [showGoogleForm, setShowGoogleForm] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/message")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Dropdown for zoom */}
      <DropdownMenu zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />

      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#1976d2",
          color: "white",
          padding: "10px 20px",
        }}
      >
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => setShowGoogleForm(!showGoogleForm)}
        >
          SignUp
        </span>
        <button
          onClick={() => setShowSignup(true)}
          style={{
            background: "white",
            color: "#1976d2",
            border: "none",
            borderRadius: "4px",
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Open Signup
        </button>
      </header>
      <main style={{ padding: "20px" }}>
        <p style={{ textAlign: "center", color: "#555" }}>{message}</p>
        {/* The zoom transform is applied only to FeedbackForm */}
        <div
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: "top left",
            transition: "transform 0.2s",
            display: showGoogleForm ? "none" : "block",
          }}
        >
          {!showGoogleForm && <FeedbackForm />}
        </div>
        {/* Show GoogleForm without zoom when toggled */}
        {showGoogleForm && <GoogleForm />}
        {/* GoogleSignup Modal */}
        {showSignup && <GoogleForm onClose={() => setShowSignup(false)} />}
      </main>
    </div>
  );
}

export default App;

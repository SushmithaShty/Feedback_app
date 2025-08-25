import React from "react";

const GoogleForm = ({ onClose }) => {
  return (
    <div style={styles.overlay} onClick={onClose}>
      <div
        style={styles.modal}
        onClick={(e) => e.stopPropagation()} // ✅ Prevent closing when clicking inside
      >
        {/* Close button */}
        <button style={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        {/* Heading */}
        <h2 style={styles.title}>Sign up for Figma</h2>

        {/* Google Button */}
        <button style={styles.googleBtn}>
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            style={styles.googleIcon}
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div style={styles.divider}>
          <span style={styles.or}>or</span>
        </div>

        {/* Email Input */}
        <input type="email" placeholder="EMAIL" style={styles.input} />

        {/* Continue with Email */}
        <button style={styles.emailBtn}>Continue with email</button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    fontFamily: "'Poppins', sans-serif",
  },
  modal: {
    background: "#fff",
    padding: "30px 25px",
    borderRadius: "12px",
    width: "360px",
    textAlign: "center",
    position: "relative",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
  closeBtn: {
    position: "absolute",
    top: "12px",
    right: "12px",
    border: "none",
    background: "transparent",
    fontSize: "20px",
    cursor: "pointer",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "25px",
  },
  googleBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "500",
    background: "#fff",
    cursor: "pointer",
    marginBottom: "20px",
  },
  googleIcon: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  },
  divider: {
    borderBottom: "1px solid #ddd",
    position: "relative",
    marginBottom: "20px",
  },
  or: {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#fff",
    padding: "0 10px",
    color: "#777",
    fontSize: "13px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
  },
  emailBtn: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "500",
    background: "#000",
    color: "#fff",
    cursor: "pointer",
  },
};

export default GoogleForm;

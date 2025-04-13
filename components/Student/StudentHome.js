import React from "react";
import { useNavigate } from "react-router-dom";

export default function StudentHome() {
  const navigate = useNavigate();

  const containerStyle = {
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "24px",
    color: "#6a0dad",
    marginBottom: "20px",
  };

  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "4px",
  };

  const handleSignOut = () => {
    localStorage.removeItem("student_token");
    navigate("/");
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Student Portal</h2>
      <button
        onClick={() => navigate("/student/add")}
        style={{ ...buttonStyle, backgroundColor: "#9b59b6" }}
      >
        Add Internship Details
      </button>
      <button
        onClick={() => navigate("/student/edit")}
        style={{ ...buttonStyle, backgroundColor: "#9b59b6" }}
      >
        Edit Internship Details
      </button>
      <button
        onClick={handleSignOut}
              style={{ ...buttonStyle, backgroundColor: "#9b59b6" }} 
      >
        Sign Out
      </button>
    </div>
  );
}

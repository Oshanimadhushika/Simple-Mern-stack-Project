import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import DashImage from "../assets/dashimg.png";

const Dashboard = ({ darkMode }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    console.log("Stored username:", storedUsername);
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div
      className={`auth-form ${darkMode ? "dark-mode" : "light-mode"}`}
      style={{
        position: "relative",
        maxWidth: "800px",
        maxHeight: "500px",
        margin: "0 auto",
        padding: "50px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: darkMode ? "#333" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <h1 className="dash-h1">Welcome to the Dashboard </h1>
      <h5 className="dash-h1">{username}</h5>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button className="dash-btn" type="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <img
        src={DashImage}
        alt="Logo"
        style={{
          position: "absolute",
          bottom: "8px",
          right: "10px",
          width: "40%",
          height: "80%",
        }}
      />
    </div>
  );
};

export default Dashboard;

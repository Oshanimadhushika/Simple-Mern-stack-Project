


import React from "react";
import  { useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout, Button } from "antd";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import "./App.css";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Layout className={darkMode ? "dark-mode" : "light-mode"}>
      <Header
        style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
      >
        <Button
          onClick={toggleDarkMode}
          shape="circle"
          icon={darkMode ? <SunOutlined /> : <MoonOutlined />}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Header>
      <Content style={{ padding: "50px" }}>
        <Routes>
          <Route path="/" element={<Login darkMode={darkMode} />} />
          <Route path="/login" element={<Login darkMode={darkMode} />} />
          <Route path="/signup" element={<Signup darkMode={darkMode} />} />
          <Route
            path="/dashboard"
            element={<Dashboard darkMode={darkMode} />}
          />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;

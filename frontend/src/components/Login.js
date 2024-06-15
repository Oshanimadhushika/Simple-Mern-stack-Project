import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import Title from "antd/es/typography/Title";

const Login = ({ darkMode }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const response = await login(values);
    console.log("response", response);
    console.log("value", values);

    setLoading(false);
    if (response.success) {
      localStorage.setItem("username", response.username);
      console.log("username login", response.username);
      navigate("/dashboard");
    } else {
      alert(response.message);
    }
  };

  return (
    <div
      className={`auth-form ${darkMode ? "dark-mode" : "light-mode"}`}
      style={{
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
      <Form onFinish={onFinish}>
        <Title level={2} style={{ color: darkMode ? "white" : "black" }}>
          Login
        </Title>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              min: 6,
              message: "Password must be at least 6 characters",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
        <Link to="/signup">Don't have an account? Sign up</Link>
      </Form>
    </div>
  );
};

export default Login;

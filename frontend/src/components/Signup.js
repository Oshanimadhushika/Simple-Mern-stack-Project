import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/auth";
import Title from "antd/es/typography/Title";

const Signup = ({ darkMode }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const response = await signup(values);
    setLoading(false);
    console.log("response", response);
    console.log("value", values);

    if (response.success) {
      // localStorage.setItem('username', response.username);
      navigate("/login");
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
          Sign Up
        </Title>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
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
            Signup
          </Button>
        </Form.Item>
        <Link to="/login">Already have an account? Login</Link>
      </Form>
    </div>
  );
};

export default Signup;



const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY || "mysecretkey";

const users = [];

app.use(express.json());

app.post("/api/signup", (req, res) => {
  const { username, email, password } = req.body;

  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }

  users.push({ username, email, password });

  console.log(username, email, password);
  res
    .status(201)
    .json({ success: true, message: "User registered successfully" });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email or password" });
  }

  const token = jwt.sign({ email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.status(200).json({ success: true, token });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

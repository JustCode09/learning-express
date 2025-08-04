// 🌐 Import required packages
const express = require('express');
const jwt = require('jsonwebtoken');

// 🚀 Initialize the Express app
const app = express();

// 🧠 Middleware to parse incoming JSON requests
app.use(express.json());

// 👤 Hardcoded user data (no database here)
const USER = {
  email: "test@example.com",
  password: "123456"
};

// 🔑 Secret key used to sign and verify JWT tokens
// In real apps, store this in a .env file (for safety)
const SECRET_KEY = "mysecretkey";

// ✅ LOGIN route: User sends email & password, gets back a token
app.post('/login', (req, res) => {
  const { email, password } = req.body; // Get data from the request body

  // Check if email and password match our fake user
  if (email === USER.email && password === USER.password) {
    // 🔐 Create a JWT token that expires in 1 hour
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

    // Respond with the token
    return res.json({ message: "Login successful", token });
  }

  // ❌ If credentials don't match, return an error
  res.status(401).json({ error: "Invalid credentials" });
});

// 🔒 PROTECTED route: Only accessible with a valid token
app.get('/protected', (req, res) => {
  const authHeader = req.headers.authorization; // Get token from header

  // 🔍 If no token is found, return an error
  if (!authHeader) {
    return res.status(401).json({ error: "Token missing" });
  }

  // 🧩 Extract token from "Bearer <token>"
  const token = authHeader.split(" ")[1];

  try {
    // ✅ Verify the token using the secret key
    const decoded = jwt.verify(token, SECRET_KEY);

    // ✅ If token is valid, respond with success
    res.json({ message: "Access granted", user: decoded });
  } catch (err) {
    // ❌ If token is invalid or expired, return error
    res.status(401).json({ error: "Invalid or expired token" });
  }
});

// 👋 Root route
app.get('/', (req, res) => {
  res.send('Welcome! Server is running and ready 🚀');
});

// 🚪 Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

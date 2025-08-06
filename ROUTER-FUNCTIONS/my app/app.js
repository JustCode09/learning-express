// Load the Express package
const express = require('express');
const app = express(); // Create our app
const PORT = 3000;

// This is like inviting a helper (router) from another room
const userRoutes = require('./routes/userRoutes');

// Let the app understand JSON data (like when you send name, age)
app.use(express.json());

// Tell the app: "Hey, any request that starts with /users, go to that router"
app.use('/users', userRoutes);

// This is the homepage
app.get('/', (req, res) => {
  res.send('🏠 Welcome to our User Info Website!');
});

// Start the app
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
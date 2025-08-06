// Bring Express and make a mini app (router)
const express = require('express');
const router = express.Router();

// Our pretend user database
const users = [
  { id: 1, name: 'Saurav' },
  { id: 2, name: 'Ram' },
];

// Show all users
router.get('/', (req, res) => {
  res.json(users); // Respond with the full list of users
});

// Add a new user (from req.body)
router.post('/', (req, res) => {
  const newUser = req.body; // Person sent in the request
  users.push(newUser); // Add to our list
  res.status(201).json(newUser); // Respond with new user
});

// Show 1 user by ID
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Export the router so app.js can use it
module.exports = router;

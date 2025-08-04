const express = require('express');
const session = require('express-session');

const app = express();

// Set up session middleware to remember visitors using cookies
app.use(session({
  secret: "i am boy",         // Secret key to sign the session cookie (keeps it safe)
  resave: true,               // Save session on every request even if it wasn't changed
  saveUninitialized: false,   // Don't create session until something stored in it
  cookie: {
    maxAge: 60000             // Session cookie expires after 60000 ms (1 minute)
  }
}));

// Route to count how many times the visitor has opened /session
app.get('/session', (req, res) => {
  if (req.session.views) {
    req.session.views++;   // Increase visit count by 1
    // Show current view count and how many seconds left before cookie expires
    res.send(`<p>views: ${req.session.views}</p><p>expires in: ${req.session.cookie.maxAge / 1000} seconds</p>`);
  } else {
    req.session.views = 1;  // First time visitor, set views to 1
    res.send("Welcome to the session demo! Refresh to see the view count.");
  }
});

// Start server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

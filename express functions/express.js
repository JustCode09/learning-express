//express.json

const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies
app.post('/greet', (req, res) => {
    const name= req.body.name; // Extract name from request body
    res.send(`Hello, ${name}`);
   // Respond with a simple message
});     
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000'); // Log server start
}   );
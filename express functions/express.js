//express.json

const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies
app.get('/', (req, res) => {
    res.send('Hello World!'); // Respond with a simple message
});     
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000'); // Log server start
}   );
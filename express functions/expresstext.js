const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.text()); // Middleware to parse text/plain request bodies
app.post('/', (req, res) => {
    console.log(req.body); // Log the text body
    res.send(`Received text: ${req.body}`); // Respond with the received text
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log server start
}); // Start the server on specified port
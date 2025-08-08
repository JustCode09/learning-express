const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to read JSON data from request body
app.use(express.json());

// GET request example
app.get("/", (req, res) => {
    console.log("GET Request Successful!");
    res.send("Get Request Successfully initiated");
});

// PUT request example
app.put("/put", (req, res) => {
    console.log("PUT Request Successful");
    console.log(req.body);
    res.send(`Data Update Request Received`);
});

// POST request example
app.post("/post", (req, res) => {
    console.log("POST Request Successful");
    console.log(req.body);
    res.send(`Data Post Request Received`);
});

// DELETE request example
app.delete("/delete", (req, res) => {
    console.log("DELETE Request Successful");
    console.log(req.body);
    res.send(`Data Delete Request Received`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server established at ${PORT}`);
});
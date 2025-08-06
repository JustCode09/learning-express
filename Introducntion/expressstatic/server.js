const express = require('express');
const app = express();

app.use(express.static('public')); // Serve static files from the 'public' directory
app.get('/', (req, res) => {
    res.send('Welcome to the Express Static Server!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res)=>{
    res.send('Hello World!');
});

app.get('/about'    , (req, res) => {  //get used for reading data
    res.send('About Page');
});

app.post('/submit'  , (req, res) => {  // used for sending data
    res.send('Form Submitted');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
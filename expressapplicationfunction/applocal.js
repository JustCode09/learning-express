//used to store global variables that you want to access in your application  in multiple routes or views.

const express = require('express');
const app = express();

app.locals.company = 'TechCorp'; // Set a global variable

app.get('/', (req, res) => {
    res.send(`welcome to $(app,local.company)`); // Access the global variable
});

//multiple global variable
app.locals.company = 'TechCorp';
app.locals.location = 'San Francisco'; // Set another global variable
app.get('/info', (req, res) => {
    res.send(app.locals); // Access multiple global variables
});
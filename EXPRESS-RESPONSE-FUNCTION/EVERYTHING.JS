//res.app propert
//give access to the main express app object from inside or a middleware or route handler
const express = require('express');
const app = express();
const PORT = 3000;

app.set('appname', 'My Express App'); // Set an application-level variable
app.get('/', (req, res) => {
    console.log(res.app.get('appname')); // Access the application-level variable
    res.send('Welcome to ' + req.app.get('appname')); // Respond with a message
}); // Define a route for the root URL



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log server start
}); // Start the server on specified port

//res.headerSent function
//its a bolean that tells you whether the response has been sent or not
app.get('/', (req, res) => {
    res.send('Hello World'); // Send a response
    console.log(res.headersSent); // true
});

//res.locals property
//an object that is specific to the current request, used to store data that tou want to pass to templates or other middlewares

app.use((req, res, next) => {
    res.locals.username = 'John Doe'; // Set a local variable
    next(); // Call the next middleware
});

app.get('/', (req, res) => {
    res.send('Hello ' + res.locals.username); // Use the local variable in the response
}); // Define a route for the root URL

//res.append(field, value) function
//appends additional values to an HTTP response header file

res.append('link', ['<http://localhost/>','http://localhost/about>']);
res.send('headers added');

//res.attachment([filename])
//sets the content disposition header to attachment( forces download in browser)

res.attachment('report.pdf')
res.send('downloading');

//res.cookie(name, value,[options]) function
//sets a cookie to be sent with the response

res.cookie('username','saurav', {maxAge:90000});
res.send('cookieset');

//res.clearcookie(name,[options]) function
//clear the specified cookie(by setting an expired date)

//res,download(path,[filename],[callback]) function
//sends a file as downloadable attachment

res.download('./files/reports.pdf');

//res.end([data],[encoding]) fucntion
//ends the response without any more processing
res.write('hello');
res.end('world');



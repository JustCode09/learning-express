// Install express and cookie-parser first:
// npm install express cookie-parser

const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const PORT = 3000;

// 1. app.set() and res.app
app.set('appname', 'My Express App');

// 2. Use cookie-parser middleware
app.use(cookieParser());

// 3. res.locals middleware example
app.use((req, res, next) => {
    res.locals.username = req.cookies.username || 'Guest';
    next();
});

// 4. Route: Set a cookie and show usage of res.cookie(), res.locals, res.app
app.get('/setcookie', (req, res) => {
    res.cookie('username', 'Saurav', { maxAge: 90000 }); // set cookie
    res.send('Cookie has been set! Visit / to see the effect.');
});

// 5. Route: Clear the cookie
app.get('/clearcookie', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie cleared!');
});

// 6. Main route: uses res.locals, res.app.get(), res.headersSent
app.get('/', (req, res) => {
    // Add extra header using res.append()
    res.append('Link', ['<http://localhost:3000/>', '<http://localhost:3000/about>']);

    // Check if headers are already sent (before res.send)
    console.log('Before send - headersSent:', res.headersSent);

    // Build response using res.locals and res.app
    res.send(`
        <h1>Welcome to ${res.app.get('appname')}</h1>
        <p>Hello, ${res.locals.username}</p>
        <p><a href="/download">Download a file</a></p>
    `);

    // After sending response
    console.log('After send - headersSent:', res.headersSent); // should log `true`
});

// 7. Route: res.attachment() — force browser download
app.get('/attachment', (req, res) => {
    res.attachment('report.pdf'); // force download name
    res.send('Forcing download with attachment header');
});

// 8. Route: res.download() — send a file directly
app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'report.pdf'); // Make sure the file exists
    res.download(filePath, 'YourReport.pdf', (err) => {
        if (err) {
            console.error('Download error:', err);
            res.status(500).send('File not found!');
        }
    });
});

// 9. Route: res.end() example
app.get('/end', (req, res) => {
    res.write('Hello ');
    res.end('World!'); // ends the response
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});

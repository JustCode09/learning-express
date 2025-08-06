// const express = require('express');
// const app = express();
// const PORT = 3000;

// const user = express.Router();
// user.get('/', (req, res) => {
//     console.log(user.baseUrl); // Shows the base URL of the router (/user)
//     res.send('User homepage'); // Respond with a message
// });
// app.use('/user', user); // Mount the user router at the /user path
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`); // Log server start
// }); // Start the server on specified port

//conditinal
const express = require('express');
const app = express();
const PORT = 3000;

const student = express.Router();
app.use('/student', student);

student.get('/signup', function (req, res) {
    if (req.baseUrl == '/student') {
        console.log("Show Signup Form");
        res.end();
    } else {
        console.log("Invalid Request")
        res.send("Invalid Route")
    }
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
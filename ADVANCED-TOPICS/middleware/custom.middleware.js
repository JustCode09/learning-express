const express = require('express');
const app= express();

app.post('/check', (req,res,next)=>{
    res.send('this is a post request');
    next()
});

app.get('/gfg', (req,res,next)=>{
    res.send('this is a get request');
    res.end();
})

app.listen(3000);
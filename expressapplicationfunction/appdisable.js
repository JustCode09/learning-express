// const express = require('express');
// const app = express();

// app.disable('trust-proxy');
// // Disable the 'trust proxy' setting
// console.log(app.get('trust proxy')); // Should log false


//app.disabled
//check if a setting is disabled
console.log(application.disabled('trust proxy')); // Should log true if 'trust proxy' is disabled   
application.enable('trust proxy');
// Enable the 'trust proxy' setting

console.log(application.disabled('trust proxy')); // Should log false if 'trust proxy' is enabled

//app.enable()//turn a setting on(true )
//app.disable()//turn a setting off(false)
//app.enabled()//check if a setting is enabled
//app.disabled()//check if a setting is disabled

// TODO: Import express and call the Router method
const express = require('express');
const tips = require('./tips');
const feedback = require('./feedback');
// TODO: Import modules for tips/feedback
const app = express();

// TODO: Use our routes
app.use('/tips', tips);
app.use('/feedback', feedback);


// TODO: Export app
module.exports = app;

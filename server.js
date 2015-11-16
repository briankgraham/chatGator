var express = require('express');
var bodyParse = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/chatClient');

require('./config/middleware')(app, express);

app.listen(8000, function () {
  console.log('listening');
});

module.exports = app;
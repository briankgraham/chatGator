var express = require('express');
var bodyParse = require('body-parser');

var app = express();

app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(8000, function () {
  console.log('listening');
});
var moment = require('moment');
var express = require('express');
var app = express();

app.get('/hello-api/', function (req, res) {
  console.log('Request Received: ' + moment().format('YYYY-MM-DD hh:mm:ss'))
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Hello RESTful API listening on port 3000!');
});
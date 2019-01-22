var moment = require('moment');
var express = require('express');
var app = express();

app.get('/hello-api/v1/hello', function (req, res) {
  console.log('Request Received: ' + moment().format('YYYY-MM-DD hh:mm:ss'))
  res.send('Hello World!');
});

app.get('/hello-api/healthCheck', function (req, res) {
  console.log('Request for Health Check ')
  res.send('OK from Hello API');
});

app.listen(3000, function () {
  console.log('Hello RESTful API listening on port 3000!');
});
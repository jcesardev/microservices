var express = require('express');
var app = express();
var router = require('./routers/router')
//var bodyParser = require('body-parser');

//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: true }));
const port = 8080

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})

app.use(router)

console.log("Simple API Gateway run on localhost: " + port)

app.listen(port);
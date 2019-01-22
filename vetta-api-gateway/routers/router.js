var express = require('express');
var router = express.Router()
var helloService = require('./helloService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(helloService)

module.exports = router
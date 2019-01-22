var express = require('express');
var router = express.Router()
var helloService = require('./helloService')
var todoService = require('./todoService')
router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(helloService)
router.use(todoService)

module.exports = router
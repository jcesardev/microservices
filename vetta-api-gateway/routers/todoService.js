var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:5000'
const api = apiAdapter(BASE_URL)

router.get('/todo-api/v1/tasks', (req, res) => {
  console.log (req.path + " called")
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})
module.exports = router
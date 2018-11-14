const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.js')
UserController(router)
module.exports = router
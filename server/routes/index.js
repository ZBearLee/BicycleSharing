const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('User Login Test!')
  console.log('test')
})

module.exports = router

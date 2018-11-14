const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const compression = require('compression')
const config = require('./config/db')
const mongoose = require('mongoose')
const index = require('./server/routes/index.js')
const user = require('./server/routes/user.js')
const message = require('./server/routes/message.js')
const bike=require('./server/routes/bike.js')
const port = process.env.PORT || 3555
const app = express()

mongoose.connect(config.mongodb)
mongoose.Promise = global.Promise


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(compression({ threshold: 0 }))
app.use('/', index)
app.use('/api', user)
app.use('/api', message)
app.use('/api', bike)


app.use(function (req, res, next) {
	var err = new Error('This page not found');
	err.status = 404;
	next(err)
})

app.listen(port, function () {
	console.log(`Server running in port ${port}`)
})
module.exports = app

const mongoose = require('mongoose')
const bikeSchema = mongoose.Schema({
    longitude: { type: String, required: true },
    latitude: { type: String, required: true },
})
const Bike = module.exports = mongoose.model('Bike', bikeSchema)
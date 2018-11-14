const mongoose = require('mongoose')
const messageSchema = mongoose.Schema({
    title : { type:String, required : true },
    poster:String,
    start_time:String,
    created_at : { type : Date, default : Date.now },
    update_at : { type : Date, default : Date.now }

})
const Message = module.exports = mongoose.model('Message',messageSchema)

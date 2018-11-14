const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email:  { type:String, required : true },
  password: String,
  recheck: String,
  avatar:String,
  token: String,
  create_time: Date
})

const usermodel = {
  User: mongoose.model('User', userSchema)
}
module.exports = usermodel

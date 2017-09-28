let mongoose = require('mongoose')
let argon2 = require('argon2')

let Schema = mongoose.Schema

let UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
})

module.exports = mongoose.model('User', UserSchema)

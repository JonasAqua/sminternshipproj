let mongoose = require('mongoose')

let Schema = mongoose.Schema

let AccountSchema = new Schema({
  accountName: String,
  profilePicture: String,
  posts: [{
    message: String,
    dateCreated: Date,
    category: String
  }]
})

AccountSchema.statics.findByName = function (name, callback) {
  this.find({accountName: new RegExp('^' + name + '$', 'i')}, callback)
}

var AccountModel = mongoose.model('Account', AccountSchema)

module.exports = AccountModel

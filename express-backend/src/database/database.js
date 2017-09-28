var mongoose = require('mongoose')

function connect () {
  mongoose.connect('mongodb://localhost:27017/socialnetwork')
}

module.exports = {connect}

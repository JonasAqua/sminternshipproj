let express = require('express')
let hash = require('pbkdf2-password')()

let router = express.Router()

// Dummy Database
let users = {
  'ab': {name: 'ab'}
}

hash({ password: 'foobar' }, (err, pass, salt, hash) => {
  if (err) throw err
  users.ab.salt = salt
  users.ab.hash = hash
})

function authenticate (name, pass, callback) {
  // Check if User exists
  var user = users[name]
  if (!user) return callback(new Error('cannot find user'))

  // Check if password is correct
  hash({ password: pass, salt: user.salt }, (err, pass, salt, hash) => {
    if (err) return callback(err)
    if (hash === user.hash) return callback(null, user)
    callback(new Error('invalid password'))
  })
}

router.post('/', (req, res) => {
  authenticate(req.body.username, req.body.password, (err, user) => {
    if (err) throw err
    if (user) {
      req.session.regenerate(() => {
        req.session.user = user
        req.session.success = 'Authenticated as ' + user.name
        res.json(req.session.success)
      })
    }
  })
})

module.exports = router

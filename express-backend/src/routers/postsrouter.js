let express = require('express')
let AccountModel = require('../database/accountmodel.js')

let router = express.Router()

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

// Post a post to the current account
router.post('/', (req, res) => {
  const handleSavePost = (err, updatedAccount) => {
    if (err) throw err
    res.send(updatedAccount)
  }
  if (!req.body.message || req.body.message === '' || !req.body.category || req.body.category === '') {
    res.status(400).send('No message found')
  } else {
    AccountModel.findById('596329c97e6fbf15208085a0', function (err, account) {
      if (err) throw err
      account.posts.push({
        message: req.body.message,
        category: req.body.category,
        dateCreated: new Date()
      })
      account.save(handleSavePost)
    })
  }
})

module.exports = router

let express = require('express')
let AccountModel = require('../database/accountmodel.js')

let router = express.Router()

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

// Get Account by Accountname
router.get('/:accountName', (req, res) => {
  AccountModel.findByName(req.params.accountName, (error, accounts) => {
    if (error) {
      res.status(500).send('Something broke!')
    }
    console.log(accounts.length)
    if (accounts.length === 0) {
      res.status(404).send('Not found!')
    } else {
      let account = accounts[0]
      account.posts.sort((a, b) => {
        return new Date(b.dateCreated) - new Date(a.dateCreated)
      })

      res.json(accounts[0])
    }
  })
})

// Get all Accounts
router.get('/', (req, res) => {
  AccountModel.find({}, {'posts': 0}, (error, accounts) => {
    if (error) {
      res.status(500).send('Something broke!')
      throw error
    }
    res.json(accounts)
  })
})

// Create new Account
router.post('/', (req, res) => {
  let account = new AccountModel({
    accountName: req.body.accountName,
    profilePicture: req.body.profilePicture,
    posts: []
  })
  account.save((err, account) => {
    if (err) throw err
    res.json(account)
  })
})

module.exports = router

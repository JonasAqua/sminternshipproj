const express = require('express')
let session = require('express-session')

let database = require('./database/database.js')
let accountRouter = require('./routers/accountrouter.js')
let postsRouter = require('./routers/postsrouter.js')

const app = express()
const bodyParser = require('body-parser')

database.connect()

app.use(bodyParser.json())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'but there are no happy endings, not here and not now'
}))

app.use((req, res, next) => {
  let err = req.session.error
  let msg = req.session.success
  delete req.session.error
  delete req.session.success
  res.locals.message = ''
  if (err) res.locals.message = err
  if (msg) res.locals.message = msg
  next()
})

app.use('/account', accountRouter)
app.use('/posts', postsRouter)

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(3001, () => {
  console.log('Example App now running on port 3001!')
})

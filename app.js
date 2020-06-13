const port = 3000
const express = require('express')
const app = express()
const expHbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generator = require('./generator.js')
const choose = expHbs.create({
  defaultLayout: 'main',
  helpers: {
    keep: function (v1, v2) { return (v1 === v2) }
  }
})


app.engine('handlebars', choose.engine)
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  console.log(req.params)
  res.render('index')
})

app.post('/', (req, res) => {
  const role = req.body.role
  const result = generator(role)
  //console.log(req)
  res.render('index', { result, role })
})

app.listen(port, () => {
  console.log("~OK~")
})
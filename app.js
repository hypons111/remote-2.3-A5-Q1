const port = 3000
const express = require('express')
const app = express()
const expHbs = require('express-handlebars')
const bodPar = require('body-parser')
const generator = require('./generator.js')

app.engine('handlebars', expHbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodPar.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  console.log(req.params)
  res.render('index')
})

app.post('/', (req, res) => {
  const role = req.body.role
  const result = generator(role)
  res.render('index', { result, role })
})



app.listen(port, () => {
  console.log("~OK~")
})
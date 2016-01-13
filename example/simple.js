const express = require('express')
const http = require('http')
const validate = require('../')
const schema = require('./schemas/all.json')

const app = express()

app.all('*', [validate(schema)], (req, res) => res.send('Hello World'))
app.use((err, req, res, next) => {
  console.log('ERR:', err.type);

  res.send('ERROR', err)
})
http
  .createServer(app)
  .listen(3000)

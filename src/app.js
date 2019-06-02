const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const logger = require('./helpers/logger')

const port = process.env.PORT || 3000

app.use(morgan('dev', {
  skip: function (req, res) {
    return res.statusCode < 400
  },
  stream: process.stderr
}))

app.use(morgan('dev', {
  skip: function (req, res) {
    return res.statusCode >= 400
  },
  stream: process.stdout
}))

app.get('/', (req, res) => {
  logger.debug('Debug statement')
  logger.info('Info statement')
  res.send('Hello World!')
})

app.use(function (req, res, next) {
  logger.error('404 page requested')
  res.status(404).send('This page does not exist!')
})

app.listen(port, () => {
  console.log('running')
})

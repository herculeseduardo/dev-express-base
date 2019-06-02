require('dotenv').config()
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const HTTPStatus = require('http-status')
const morgan = require('morgan')
const logger = require('./helpers/logger')({ ctx: 'Application' })

const port = process.env.PORT || 3000

app.use(cors({
  origin: [process.env.CORS_DOMAINS_ALLOWED],
  credentials: true
}))

app.use((err, req, res, next) => {
  res.status(err.status || HTTPStatus.INTERNAL_SERVER_ERROR)
  if (!err.code) {
    console.trace(err)
  }
  res.json(err)
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.text())

app.use(cookieParser())

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

const express = require('express')
const router = express.Router()
const HTTPStatus = require('http-status')
const logger = require('helpers/logger')({ context: 'USER' })

const validateJWT = require('helpers/jwt')

router.get('/', validateJWT, (req, res, next) => {
  try {
    logger.info('Router User')
    res
      .status(HTTPStatus.OK)
      .json({ 'users': [] })
  } catch (err) {
    return next(err)
  }
})

module.exports = router

const express = require('express')
const router = express.Router()
const HTTPStatus = require('http-status')

const validateJWT = require('helpers/jwt')

router.get('/', validateJWT, (req, res, next) => {
  try {
    res
      .status(HTTPStatus.OK)
      .json({ 'users': [] })
  } catch (err) {
    return next(err)
  }
})

module.exports = router

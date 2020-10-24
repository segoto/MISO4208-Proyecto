var express = require('express')
var router = express.Router()

const fs = require('fs')
const fetch = require('node-fetch')
const randomGenerator = require('../random-generators/random-login')
const path = require('path')

router.get('/bdt-login', function (req, res, next) {
  let fileContent = randomGenerator.generateRandomFile()

  fs.writeFileSync(path.resolve('features/login/login.feature'), fileContent)

  req.app.get('processing')()

  fetch('http://localhost:3001/test-bdt-habitica-web')
    .then(() => {
      let rawData = fs.readFileSync(
        path.resolve('.tmp/json/signup-to-habitica.json')
      )
      console.log(rawData);
      let results = JSON.parse(rawData)
      res.send(results)
    })
    .catch((error) => {
      console.error(error)
    })
})

router.get('/results-bdt-signup', (req, res, next) => {
  let rawData = fs.readFileSync(
    path.resolve('.tmp/json/login-to-habitica.json')
  )
  let results = JSON.parse(rawData)
  res.send(results)

  req.app.get('processing')()
})

module.exports = router

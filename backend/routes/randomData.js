var express = require('express')
var router = express.Router()

const fs = require('fs')
const fetch = require('node-fetch')
const randomGenerator = require('../random-generators/random-login')
const path = require('path')

router.get('/bdt-login', function (req, res, next) {
  let fileContent = randomGenerator.generateRandomFile()

  fs.writeFileSync(
    '/Users/andydonoso/Desktop/UNIVERSIDAD/SEMESTRE 7/Pruebas Automáticas/MISO4208-Proyecto/backend/features/login/login.feature',
    fileContent
  )

  req.app.get('processing')()

  fetch('http://localhost:3001/test-bdt-habitica-web')
    .then(() => {
      let rawData = fs.readFileSync(
        path.resolve('.tmp/json/signup-to-habitica.json')
      )
      let results = JSON.parse(rawData)
      res.send(results)
    })
    .catch((error) => {
      console.error(error)
    })
})

module.exports = router

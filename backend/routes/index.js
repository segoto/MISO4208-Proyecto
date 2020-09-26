var express = require('express')
var router = express.Router()
const cypress = require('cypress')
const { spawn } = require('child_process')
const fs = require('fs')

var MongoClient = require('mongodb').MongoClient
const { databaseUser, databasePassword, databaseName } = require('../config')
const uri =
  'mongodb+srv://' +
  databaseUser +
  ':' +
  databasePassword +
  '@educapp-viylh.gcp.mongodb.net/' +
  databaseName +
  '?retryWrites=true&w=majority'

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send({ key: 'value' })
  req.app.get('processing')()
})

router.get('/e2e', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  MongoClient.connect(uri, function (err, client) {
    if (err) {
      res.send('Error')
    }
    let db = client.db('testing')
    db.collection('tests')
      .find({ type: 'e2e' })
      .toArray(function (err, result) {
        if (err) {
          res.send('Error')
        }
        res.send(result)
      })
  })
  req.app.get('processing')()
})

router.get('/random', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  MongoClient.connect(uri, function (err, client) {
    if (err) {
      res.send('Error')
    }
    let db = client.db('testing')
    db.collection('tests')
      .find({ type: 'random' })
      .toArray(function (err, result) {
        if (err) {
          res.send('Error')
        }
        res.send(result)
      })
  })
  req.app.get('processing')()
})

router.get('/tests', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  MongoClient.connect(uri, function (err, client) {
    if (err) {
      res.send('Error')
    }
    let db = client.db('testing')
    db.collection('tests')
      .find()
      .toArray(function (err, result) {
        if (err) {
          res.send('Error')
        }
        res.send(result)
      })
  })
  req.app.get('processing')()
})

/* GET home page. */
router.get('/test_habitica_web', function (req, res, next) {
  cypress
    .run({
      spec: './cypress/integration/simple.spec.js',
    })
    .then((results) => {
      req.app.get('processing')()
      // console.log(results)
      res.end(JSON.stringify(results))
      MongoClient.connect(uri, function (err, client) {
        if (err) {
          console.log(`Error: ${err}`)
        }
        let db = client.db('testing')
        db.collection('tests').insertOne({
          type: 'e2e',
          data: JSON.stringify(results),
        })
      })
    })
    .catch((err) => {
      console.error(err)
    })
})

router.get('/random_habitica_web', function (req, res, next) {
  cypress
    .run({
      spec: './cypress/integration/random_test_web.spec.js',
    })
    .then((results) => {
      req.app.get('processing')()
      // console.log(results)
      res.end(JSON.stringify(results))

      MongoClient.connect(uri, function (err, client) {
        if (err) {
          console.log(`Error: ${err}`)
        }
        let db = client.db('testing')
        db.collection('tests').insertOne({
          type: 'random',
          data: JSON.stringify(results),
        })
      })
    })
    .catch((err) => {
      console.error(err)
    })
})

router.get('/test-habitica-mobile', function (req, res, next) {
  const path = '/Users/andydonoso/Library/Android/sdk/'
  const avdName = 'Nexus_5_API_30'
  const commands = `cd; ${path}emulator/emulator -avd ${avdName}; cd; cd ${path}platform-tools; ./adb shell monkey -p com.habitrpg.android.habitica -v 1000`
  console.log(commands)

  const cd = spawn(commands, { shell: true })

  cd.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  cd.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })

  cd.on('error', (error) => {
    console.log(`error: ${error.message}`)
  })

  cd.on('close', (code) => {
    res.send({ execution: 'Exerciser Monkey process done.' })
  })

  req.app.get('processing')()
})

router.get('/test-bdt-habitica-web', (req, res, next) => {
  const command = spawn('npx wdio run wdio.conf.js', { shell: true })

  command.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  command.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })

  command.on('error', (error) => {
    console.log(`error: ${error.message}`)
  })

  command.on('close', (code) => {
    res.send({ execution: 'BDT process done.' })
  })

  req.app.get('processing')()
})

router.get('/results-bdt-habitica-web', (req, res, next) => {
  let rawData = fs.readFileSync('backend/.tmp/json/signup-to-habitica.json')
  let results = JSON.parse(rawData)
  res.send(results)
})

router.get('/test-my-expenses', function (req, res, next) {
  const path = '/Users/andydonoso/Library/Android/sdk/'
  const avdName = 'Nexus_5_API_30'
  const commands = `cd; ${path}emulator/emulator -avd ${avdName}; cd; cd ${path}platform-tools; ./adb shell monkey -p org.totschnig.myexpenses -v 1000`
  console.log(commands)

  const cd = spawn(commands, { shell: true })

  cd.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  cd.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })

  cd.on('error', (error) => {
    console.log(`error: ${error.message}`)
  })

  cd.on('close', (code) => {
    res.send({ execution: 'Exerciser Monkey process done.' })
  })

  req.app.get('processing')()
})

module.exports = router

var express = require('express')
var router = express.Router()
const cypress = require('cypress')
const { spawn } = require('child_process')

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send({ key: 'holitas' })
  // setTimeout(req.app.get('processing'), 5000);
  req.app.get('processing')()
})

/* GET home page. */
router.get('/test', function (req, res, next) {
  res.render('index', { title: 'Express' })
  cypress
    .run({
      spec: './cypress/integration/simple.spec.js',
    })
    .then((results) => {
      req.app.get('processing')()
      // console.log(results)
    })
    .catch((err) => {
      console.error(err)
    })
})

router.get('/test-habitica-mobile', function (req, res, next) {
  const emulatorPath = req.body.emulatorPath

  const cd = spawn(
    `cd; ${emulatorPath}; cd; cd /Users/andydonoso/Library/Android/sdk/platform-tools; ls; ./adb shell monkey -p com.habitrpg.android.habitica -v 1000`,
    { shell: true }
  )

  cd.on('close', (code) => {
    res.send('Exerciser Monkey process done.')
  })
})

module.exports = router

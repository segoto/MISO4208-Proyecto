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
  // res.render('index', { title: 'Express' });
  cypress
    .run({
      spec: './cypress/integration/simple.spec.js',
    })
    .then((results) => {
      req.app.get('processing')()
      // console.log(results)
      res.end(JSON.stringify(results))
    })
    .catch((err) => {
      console.error(err)
    })
})

router.get('/test-habitica-mobile', function (req, res, next) {
  const path = req.body.sdkPath
  const avdName = req.body.avdName
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
    res.send('Exerciser Monkey process done.')
  })

  req.app.get('processing')()
})

module.exports = router

var express = require('express');
var router = express.Router();
const cypress = require('cypress')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/prueba1', function(req, res, next) {
  res.render('index', { title: 'Express' });
  cypress.run({
  spec: '../cypress/cypress/integration/simple.spec'
  })
  .then((results) => {
    console.log(results)
  })
  .catch((err) => {
    console.error(err)
  })
});


module.exports = router;

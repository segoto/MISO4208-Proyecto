var express = require('express');
var app = express();
var fs = require("fs");
const cypress = require('cypress')

var id = 2;


/* GET home page. */
app.get('/test_suite_habitica_web', function(req, res) {
  cypress.run({
  spec: './cypress/integration/simple.spec.js',
  })
  .then((results) => {
    console.log(results)
    res.end(JSON.stringify(results))
  })
  .catch((err) => {
    console.error(err)
  })
});


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

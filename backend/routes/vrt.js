var express = require('express')
var router = express.Router()
const resemble = require('resemblejs');
const fs = require('fs');
const cypress = require('cypress');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.end("recibido")
    cypress
        .run({
            spec: './cypress/integration/vrt.spec.js',
        })
        .then((results) => {
            req.app.get('processing')()
            // console.log(results)
            //res.end(JSON.stringify(results))
        })
        .catch((err) => {
            console.error(err)
        });
});

router.get('/hab_web', function (req, res, next) {
    response = []
    for(let i=1;i<11;i++){
        resemble('./utils/base_images/img'+i+'.png')
            .compareTo('./utils/mod_images/img'+i+'.png')
            .ignoreColors()
            .onComplete(function(data) {
                fs.writeFile('./utils/diff_images/img'+i+'.png', data.getBuffer(), (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                });
                data['id'] = 'img'+i
                response.push(data);
            });
    }

    res.send(response);
})

module.exports = router

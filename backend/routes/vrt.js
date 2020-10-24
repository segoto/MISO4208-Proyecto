var express = require('express')
var router = express.Router()
const resemble = require('resemblejs');
const fs = require('fs');
const cypress = require('cypress');

/* GET home page. */
router.get('/hab_web', function (req, res, next) {
    response = []
    try{
        for(let i=1;i<19;i++){
            resemble('./utils/base_images/img'+i+'.png')
                .compareTo('./utils/mod_images/img'+i+'.png')
                .ignoreColors()
                .onComplete(function(data) {
                    fs.writeFile('./utils/diff_images/img'+i+'.png', data.getBuffer(), (err) => {
                        if (err) throw err;
                        // console.log('The file has been saved!');
                    });
                    data['id'] = 'img'+i
                    data['imagen_diff'] = `http://localhost:3001/diff_images/img${i}.png`;
                    data['imagen_mod'] = `http://localhost:3001/mod_images/img${i}.png`;
                    data['imagen_base'] = `http://localhost:3001/base_images/img${i}.png`;
                    response.push(data);
                });
        }
    }catch (e){
        console.log(e);
    }


    res.end(JSON.stringify(response));
    req.app.get('processing')()
});

module.exports = router

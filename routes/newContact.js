var express = require('express');
var router = express.Router();
var nodemailer  = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('newContact', { title: 'Обратная связь' });
});

//post
router.post('/send', function(req, res, next){
    var transport = nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user:"lapytsko@gmail.com",
            pass:"111"
        }

    });
});

var mailOp = {

}
module.exports = router;

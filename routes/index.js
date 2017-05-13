var express = require('express');
var router = express.Router();

/ GET first page. /
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Начальная страница' });
});

/ GET Userlist page. /
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {"userlist" : docs} );
    });
});

/ POST to Add User Service /
router.post('/adduser', function(req, res) {

    var db = req.db;

    var userLogin = req.body.userlogin;
    var userPassword = req.body.userpassword;

    var collection = db.get('usercollection');

    collection.insert({
        "userlogin" : userLogin,
        "userpassword" : userPassword
    }, function (err, doc) {
        if (err) {
            res.send("There was a problem adding the information to the database.");
        }
        else {
            res.redirect("userlist");
        }
    });
});

/POST to Check Login and Password (Autorisation)/

router.post('/checkData', function(req, res, next) {
    var db = req.db;

    var userlogin = req.body.userlogin;
    var userpassword = req.body.userpassword;

    var collection = db.get('usercollection');

    collection.findOne({
        userlogin: userlogin,
        userpassword: userpassword
    }, function (err, user) {
        if (user) {
            res.redirect('/work');
        }
        else {
            res.send("Пользователь с данным логином и паролем не зарегист")
        }

    });
});

/POST to Create Table/

router.post('/createTable', function(req, res, next){


});

module.exports = router;

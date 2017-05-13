var express = require('express');
var router = express.Router();

/* GET UserList page. */
router.get('/', function(req, res, next) {
    res.render('userlist', { title: 'Список Пользователей' });
});

module.exports = router;

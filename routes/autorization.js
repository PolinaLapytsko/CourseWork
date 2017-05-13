var express = require('express');
var router = express.Router();

/* GET autorisation page. */
router.get('/', function(req, res, next) {
    res.render('autorisation', { title: 'Авторизация' });
});

module.exports = router;

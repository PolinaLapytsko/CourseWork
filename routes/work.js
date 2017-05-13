var express = require('express');
var router = express.Router();

/* GET registration page. */
router.get('/', function(req, res, next) {
    res.render('work', { title: 'Домашняя страница' });
});

module.exports = router;

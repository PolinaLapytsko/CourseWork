var express = require('express');
var router = express.Router();

/* GET UserList page. */
router.get('/', function(req, res, next) {
    res.render('table', { title: 'Таблица смежности' });
});

module.exports = router;

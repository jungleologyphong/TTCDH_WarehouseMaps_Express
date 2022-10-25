var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('statistical', { title: 'Thống kê' });
});

module.exports = router;
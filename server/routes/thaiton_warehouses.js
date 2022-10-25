var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('thaiton_warehouses', { title: 'Kho Thái Tôn' });
});

module.exports = router;
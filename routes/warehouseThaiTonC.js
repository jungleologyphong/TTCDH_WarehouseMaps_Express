var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('warehouseThaiTonC', { title: 'Kho Thái Tôn - Kho C' });
});

module.exports = router;
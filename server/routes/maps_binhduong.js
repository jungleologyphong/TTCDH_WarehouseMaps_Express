var express = require('express');
var router = express.Router();
/* GET MapsBinhDuong */
router.get('/', function (req, res, next) {
    res.render('maps_binhduong', { title: 'Sơ đồ kho Bình Dương' });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var userController = require('../controller/user.controller');
/* GET IndexPage. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Đăng nhập' });
});

router.post('/signin', userController.signIn);

router.get('/api/users', userController.getAllUser);

module.exports = router;
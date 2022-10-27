var express = require('express');
var router = express.Router();
var todoController = require('../controller/todo.controller');
var taskController = require('../controller/task.controller');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('dashboard', { title: 'Trang chủ' });
});

router.post('/createTodo', todoController.create);

router.post('/createTask', taskController.create);

router.get('/api/todos', todoController.getAllTodo);

router.get('/api/tasks', taskController.getAllTask);

module.exports = router;
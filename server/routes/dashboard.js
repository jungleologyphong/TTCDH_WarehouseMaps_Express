var express = require('express');
var router = express.Router();
var todoController = require('../controller/todo.controller');
var taskController = require('../controller/task.controller');
/* GET Dashboard. */
router.get('/', function (req, res, next) {
    res.render('dashboard', { title: 'Trang chủ' });
});

router.post('/createTodo', todoController.createTodo);

router.post('/createTask', taskController.createTask);

router.get('/api/tasks', taskController.getAllTask);

router.get('/api/todos', todoController.getAllTodo);

module.exports = router;
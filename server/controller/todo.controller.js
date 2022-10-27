const Todo = require("../models/Todo");

exports.create = (req, res) => {
    //Create a Todo
    const todo = new Todo({
        titleTodo: req.body.titleTodo,
        statusTodo: req.body.statusTodo,
        UserID: UserID
    });

    //Save Todo in the database
    todo
        .save(todo)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                Message: err.Message
            });
        });
};

exports.getAllTodo = async (req, res) => {
    try {
        const TodoList = await Todo.find({})

        return res.json(TodoList);
    } catch (error) {
        console.error('error', error.Message);

        res.status(404).json({ Message_API_GetTodo: "ERROR_INTERNAL_SERVER_ERROR" })
    }
}
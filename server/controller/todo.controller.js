const Todo = require("../models/Todo");

exports.createTodo = (req, res) => {
  //Create a Todo
  try {
    console.log("POST RUNNING");
    const { titleTodo } = req.body;

    if (!titleTodo) {
      return res.status(404).json({ message: "ERROR_MISSING_PARAM" });
    }

    const newTodo = new Todo({ titleTodo });

    newTodo.save((error, doc) => {
      if (error)
        return res.status(404).json({
          message: error.message
        });

      return res.json({
        message: "Successfully",
        data: doc
      });
    });
  } catch (error) {
    console.error('error', error.message);
    res.status(404).json({ message: "ERROR_INTERNAL_SERVER_ERROR " });
  }
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

exports.getTodoByUserID = async (req, res) => {
  try {
    const UserID = req.params.UserID;

    if (!UserID) {
      return res.status(404).json({ Message_API_GetTodoByUserID: "MISSING_PARAMS_USERID" })
    }

    Todo.findById(UserID).then((data) => {
      res.send(data);
      console.log("Data: " + data);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });

  } catch (error) {
    console.log('error', error.Message);

    res.status(404).json({ Message_API_GetTodoByUserID: "ERROR_INTERNAL_SERVER_ERROR" });
  }
}
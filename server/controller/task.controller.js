const Task = require("../models/Task");

exports.create = (req, res) => {
    //Create a Task
    const task = new Task({
        titleTask: req.body.titleTask,
        statusTask: req.body.statusTask,
        UserID: req.body.UserID
    });

    //Save Task in the database
    task
    .save(task)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            Message: err.message
        });
    });
};

exports.getAllTask = async (req, res) => {
    try {
        const TaskList = await Task.find({});

        return res.json(TaskList)
    } catch (error) {
        console.error('error', error.message);

        res.status(404).json({ Message_API_GetTask: "ERROR_INTERNAL_SERVER_ERROR" });
    }
}
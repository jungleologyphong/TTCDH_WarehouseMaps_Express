const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
    titleTodo: {
        type: String,
        require: true,
    },
    statusTodo: {
        type: String,
        require: true,
        default: true,
    },
    UserID: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model("Todo", Todo)
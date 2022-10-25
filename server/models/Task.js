const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    titleTask: {
        type: String,
        require: true,
    },
    statusTask: {
        type: String,
        require: true,
    },
    UserID: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model("Task", Task);
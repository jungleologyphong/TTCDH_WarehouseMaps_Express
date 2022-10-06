const mongoose = require('mongoose');

const User = new mongoose.Schema({
    fullname: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    telephoneNumber: {
        type: Number,
        require: true,
    },
    companyUnit: {
        type: String,
        require: true,
    },
    pathImage: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model("User", User);
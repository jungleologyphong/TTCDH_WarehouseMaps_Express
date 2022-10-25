const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    fullname: {
        type: String,
        require: true,
    },
    email: {
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
    },
    loginAt: {
        type: Date,
        require: true,
        default: Date.now
    },
    logoutAt: {
        type: Date,
        require: true,
        default: Date.now
    },
    typeUser: {
        type: String,
        default: "User"
    }
});

module.exports = mongoose.model("Users", Users);
const mongoose = require('mongoose');

const Company = new mongoose.Schema({
    nameCompany: {
        type: String,
        require: true,
    },
    totalArea: {
        type: Number,
        require: true,
    },
    companyUnit: {
        type: String,
        require: true,
    },
    pathImage: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Company", Company);
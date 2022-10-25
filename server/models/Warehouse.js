const mongoose = require('mongoose');

const Warehouse = new mongoose.Schema({
    nameWarehouse: {
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
        require: true,
    }
})

module.exports = mongoose.model("Warehouse", Warehouse);
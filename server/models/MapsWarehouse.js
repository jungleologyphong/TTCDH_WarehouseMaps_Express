const mongoose = require('mongoose');

const MapsWarehouse = new mongoose.Schema({
    nameWarehouse: {
        type: String,
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

module.exports = mongoose.model("MapsWarehouse", MapsWarehouse);
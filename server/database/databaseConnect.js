const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://ttcdanghuynh:7YIH9m2rpveMNWIF@ac-5fuk2nm-shard-00-00.3ldgh3r.mongodb.net:27017/TTCDangHuynh_WarehouseMaps?replicaSet=atlas-iz92cv-shard-0&ssl=true&authSource=admin", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connect successfully!");
    } catch (error) {
        console.log("Error:" + error);
    }
}

module.exports = { connect };

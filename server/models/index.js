const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.Customer = require("./Customer.js")(mongoose);
db.MapsWarehouse = require("./MapsWarehouse")(mongoose);
db.User = require("./User")(mongoose)

module.exports = db;

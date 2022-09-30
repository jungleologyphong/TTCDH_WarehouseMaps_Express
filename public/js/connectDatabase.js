var MongoClient = require('../node_modules/mongodb').MongoClient;
var url = "mongodb://ttcdanghuynh:7YIH9m2rpveMNWIF@ac-5fuk2nm-shard-00-00.3ldgh3r.mongodb.net:27017,ac-5fuk2nm-shard-00-01.3ldgh3r.mongodb.net:27017,ac-5fuk2nm-shard-00-02.3ldgh3r.mongodb.net:27017/TTCDangHuynh_WarehouseMaps?replicaSet=atlas-iz92cv-shard-0&ssl=true&authSource=admin";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Connect to Database sucessfully!");
    db.close();
});

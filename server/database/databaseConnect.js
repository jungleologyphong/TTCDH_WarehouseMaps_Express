const { MongoClient } = require("mongodb");
const connectionString = "mongodb://ttcdanghuynh:7YIH9m2rpveMNWIF@ac-5fuk2nm-shard-00-00.3ldgh3r.mongodb.net:27017/TTCDangHuynh_WarehouseMaps?replicaSet=atlas-iz92cv-shard-0&ssl=true&authSource=admin";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function () {
    client.connect(function (err, db) {
      if (err || !db) {
        return console.log(err);
      }

      dbConnection = db.db("TTCDangHuynh_WarehouseMaps");
      console.log("Successfully connected to MongoDB with DB:", dbConnection.namespace);

    });
  },

  getDb: function () {
    return dbConnection;
  },
};


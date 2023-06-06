const MongoClient = require("mongodb").MongoClient;

require("dotenv").config();

const uri = process.env.DB_URL;

let _db;

exports.initDB = (callback) => {
  MongoClient.connect(uri, { useUnifiedTopology: true }).then((client) => {
    _db = client;
    callback(null, _db);
  });
};

exports.getDb = () => {
  if (!_db) {
    throw Error("Database not initialized");
  }
  return _db;
};

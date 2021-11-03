const { MongoClient, ObjectId } = require("mongodb");
const { config } = require("../config");

const MONGO_URI = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
    this.dbName = config.dbName;
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            console.log(MONGO_URI);
            reject(err);
          }
          console.log("connected succesfuly to mongo");
          resolve(this.client.db(this.dbName));
        });
      });
    }
    return MongoLib.connection;
  }

  getAll(category) {
    return this.connect().then((db) => {
      return db.collection(category).find({}).toArray();
    });
  }

  getOne(category, id) {
    return this.connect().then((db) => {
      return db
        .collection(category)
        .find({ _id: ObjectId(id) })
        .toArray();
    });
  }
}

module.exports = MongoLib;

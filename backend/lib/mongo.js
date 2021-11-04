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

  getAll(collection) {
    return this.connect().then((db) => {
      return db.collection(collection).find({}).toArray();
    });
  }

  getOne(collection, id) {
    return this.connect().then((db) => {
      return db
        .collection(collection)
        .find({ _id: ObjectId(id) })
        .toArray();
    });
  }

  create(collection, data) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).insertOne(data);
      })
      .then((result) => result.insertedId);
  }

  update(collection, id, data) {
    return this.connect()
      .then((db) => {
        return db
          .collection(collection)
          .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
      })
      .then((result) => result.upsertedId);
  }

  delete(collection, id) {
    return this.connect().then((db) => {
      return db
        .collection(collection)
        .deleteOne({ _id: ObjectId(id) })
        .then((result) => id);
    });
  }
}

module.exports = MongoLib;

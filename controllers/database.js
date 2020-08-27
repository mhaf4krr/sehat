/* MangoDB */
const MongoClient = require("mongodb").MongoClient;

// Connection URL

const url = "mongodb://sehat_admin:root20@ds159025.mlab.com:59025/sehat";
ObjectID = require("mongodb").ObjectID;

/* Reusable Database Object */
let db;

async function connect(url) {
  client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const dbName = "sehat";
  db = client.db(dbName);
  return db;
}

setTimeout(() => {
  connect(url)
    .then((database) => {
      db = database;
      console.log("Database Connected");
    })
    .catch((error) => {
      console.log("Database Connection Error " + error);
      throw new Error(error);
    });
}, 2000);

/* General Read Query Function */

async function queryDatabase(collection_name, filter) {
  try {
    let collection = db.collection(collection_name);
    let result = await collection.find(filter).toArray();

    return result;
  } catch (error) {
    if (error) {
      console.log("Database Error " + error);
      return new Error(error);
    }
  }
}

/* General Update Query Function */

async function insertIntoDatabase(collection_name, document) {
  try {
    let collection = db.collection(collection_name);
    return await collection.insertOne(document);
  } catch (error) {
    if (error) {
      console.log("Database Error " + error);
      return new Error(error);
    }
  }
}

/* General Insert Function */

async function insertManyIntoDatabase(collection_name, document) {
  try {
    let collection = db.collection(collection_name);
    return await collection.insertMany(document);
  } catch (error) {
    console.log("Database Connection Error " + error);
    throw new Error(error);
  }
}

async function ReplaceIntoDatabase(collection_name, filter, document) {
  try {
    let collection = db.collection(collection_name);
    return await collection.replaceOne(filter, document);
  } catch (error) {
    console.log("Database Connection Error " + error);
    throw new Error(error);
  }
}

exports.queryDatabase = queryDatabase;
(exports.insertIntoDatabase = insertIntoDatabase),
  (exports.insertManyIntoDatabase = insertManyIntoDatabase);
exports.ReplaceIntoDatabase = ReplaceIntoDatabase;

const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://mukeshproject06:7p5MgszvgOmqHg8d@cluster0.umkbthn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

async function dbConnect() {
  let res = await client.connect();
  let db = res.db("Mukesh");
  return db.collection("college");
} 

// async function dbConnect() {
//   let res = await client.connect();
//   let db = res.db("Mukesh");
//   let collection = db.collection("college");
//   let response = await collection.find({}).toArray();
//   console.log(response);
// }
module.exports = dbConnect;

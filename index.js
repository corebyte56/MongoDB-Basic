const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("MongoDB connected ✅");

    const db = client.db("testDB");
    const collection = db.collection("users");

    await collection.insertOne({ name: "Fahim" });

    console.log("Data inserted ✅");
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

run();
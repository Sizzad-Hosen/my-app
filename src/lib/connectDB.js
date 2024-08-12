
const { MongoClient, ServerApiVersion } = require('mongodb');

let db;

const connectDB = async () => {
  if (db) return db; // Return the existing connection if it exists

  try {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iynsonj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect(); // Await the connection to MongoDB
// database name and create it
    db = client.db("next-hero");
    console.log("Connected to MongoDB successfully");
    return db;

  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw new Error("Failed to connect to the database"); // Re-throw the error for higher-level handling
  }
};

export default connectDB;

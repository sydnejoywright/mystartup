const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('user_auth');
const userCollection = db.collection('users');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log("Connected to MongoDB");
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

// Get user by email
function getUser(email) {
  return userCollection.findOne({ email: email });
}

// Get user by token (for authenticated sessions)
function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

// Create a new user (with hashed password)
async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10); // hash the password

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(), // generate a unique token for the user
  };

  await userCollection.insertOne(user);
  return user;
}

// Export the functions to be used in other files
module.exports = {
  getUser,
  getUserByToken,
  createUser,
};

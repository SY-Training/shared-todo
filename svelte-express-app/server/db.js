const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const connection = process.env.CONNECTIONSTRING;

const client = new MongoClient(connection);
(async function ConnectDB() {
  await client.connect();
  client.db();
  module.exports = client;
})();

/** Database connection for Microblog. */

// const { Client } = require("pg");

// const client = new Client(process.env.DATABASE_URL || "postgresql:///microblog");

// client.connect();

// module.exports = client;

const { Client } = require("pg");

const client = new Client({
  user: "baer",
  host: "localhost",
  port: 5432,
  password: "baer",
  database: "microblog",
});

client.connect();

module.exports = client;

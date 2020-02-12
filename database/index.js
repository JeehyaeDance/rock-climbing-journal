const { Pool } = require("pg");

let pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

pool.on("error", err => {
  console.log(err);
});

pool.connect();
module.exports = pool;

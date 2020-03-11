const { Pool } = require("pg");

console.log(process.env.DB_HOST, process.env.DB_NAME, process.env.DB_PORT);

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

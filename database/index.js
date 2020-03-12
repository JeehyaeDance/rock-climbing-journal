const { Pool } = require("pg");

console.log("environment: ", process.env.NODE_ENV);

let config =
  process.env.NODE_ENV === "development"
    ? { host: process.env.DB_HOST, database: process.env.DB_NAME, port: process.env.DB_PORT }
    : {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
      };

let pool = new Pool(config);

pool.on("error", err => {
  console.log(err);
});

pool.connect();
module.exports = pool;

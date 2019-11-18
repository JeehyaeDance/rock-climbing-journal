const { Pool } = require("pg");
const config = require("./postgres-config.js");
let pool;

if (process.env.NODE_ENV === "production") {
  pool = new Pool(config);
} else {
  pool = new Pool({
    host: "localhost",
    database: "climbing",
    port: 5432
  });
}

pool.on("error", err => {
  console.log(err);
});

pool.connect();
module.exports = pool;

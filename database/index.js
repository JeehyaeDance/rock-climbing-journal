const { Pool } = require("pg");
const config = require("./postgres-config.js");
let pool = new Pool(config);

pool.on("error", err => {
  console.log(err);
});

pool.connect();
module.exports = pool;

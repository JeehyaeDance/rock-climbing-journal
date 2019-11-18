const db = require("../database/index");

module.exports = {
  getUserLogs: (req, res) => {
    db.query(``, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data.rows);
      }
    });
  }
};

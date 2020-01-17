const db = require("../database/index");

module.exports = {
  loginInfo: (req, res) => {
    db.query(`SELECT * FROM users WHERE username = '${req.params.userName}'`, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.send(data.rows[0]);
      }
    });
  },
  addUser: (req, res) => {
    db.query(
      `INSERT INTO users (email, username) VALUES ('${req.body.email}', '${req.body.userName}')`,
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.send(data.rows);
        }
      }
    );
  },
  logWork: (req, res) => {
    db.query(
      `INSERT INTO logs (level, note, userid) VALUES ('${req.body.level}', '${req.body.note}', '${req.body.userId}')`,
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.send(data.rows);
        }
      }
    );
  },
  getLogs: (req, res) => {
    db.query(
      `SELECT level, posting_date FROM logs WHERE userid = '${req.params.userId}' ORDER BY posting_date ASC`,
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.send(data.rows);
        }
      }
    );
  }
};

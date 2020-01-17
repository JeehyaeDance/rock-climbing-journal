const db = require("../database/index");
const bcrypt = require("bcrypt");

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
  },
  createAcc: (req, res) => {
    let username = req.body.userName;
    let pw = req.body.password;
    db.query(`SELECT * FROM users WHERE username = '${username}'`)
      .then(result => {
        let user = result.rows[0];
        if (!user) {
          bcrypt.hash(pw, 10).then(function(hash) {
            db.query(`INSERT INTO users (password, username) VALUES ('${hash}', '${username}') RETURNING userId`).then(
              data => {
                data.rows.userid;
              }
            );
          });
        }
      })

      //else, throw error
      .catch(e => console.log(e));
  }
};

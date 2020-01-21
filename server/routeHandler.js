const db = require("../database/index");
const bcrypt = require("bcrypt");

module.exports = {
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
            db.query(`INSERT INTO users (password, username) VALUES ('${hash}', '${username}') RETURNING userId`)
              .then(data => {
                res.send({
                  id: data.rows[0].userid,
                  message: "account created"
                });
              })
              .catch(error => {
                console.log(error);
              });
          });
        } else {
          res.send("user exist");
        }
      })
      //else, throw error
      .catch(e => console.log(e));
  },
  login: (req, res) => {
    let username = req.body.userName;
    let pw = req.body.password;
    db.query(`SELECT * FROM users WHERE username = '${username}'`).then(result => {
      let user = result.rows[0];
      if (user) {
        //compare pw with hash
        bcrypt.compare(pw, user.password).then(function(result) {
          if (result) {
            res.cookie("user_id", user.userid, {
              httpOnly: true,
              secure: req.app.get("env") != "development",
              signed: true
            });
            res.send(req.signedCookies);
          } else {
            res.send("invalid login");
          }
        });
      } else {
        res.send("invalid login");
      }
    });
  }
};

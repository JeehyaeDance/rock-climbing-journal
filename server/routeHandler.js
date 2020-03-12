const db = require("../database/index");
const bcrypt = require("bcrypt");

module.exports = {
  logWork: (req, res) => {
    const note = req.body.note === "" ? null : `'${req.body.note}'`;
    db.query(
      `INSERT INTO logs (level, note, userid) VALUES ('${req.body.level}', ${note}, '${req.body.userId}')`,
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
    let logs = {};
    db.query(`select DATE(posting_at) posting_date from logs group by posting_date order by posting_date`)
      .then(result => {
        let seventhDay;
        if (result.rows.length > 6) {
          seventhDay = result.rows[result.rows.length - 7].posting_date.toString();
        } else {
          seventhDay = result.rows[0].posting_date.toString();
        }
        let onlyDate = seventhDay.substring(0, 15);
        db.query(
          `SELECT level, posting_at FROM logs WHERE userid='${req.params.userId}' AND posting_at > '${onlyDate}'`
        )
          .then(weekLog => {
            logs.allLog = weekLog.rows;
            db.query(
              `SELECT level FROM logs WHERE userid = '${req.params.userId}' AND DATE_TRUNC('day',posting_at) = CURRENT_DATE`
            )
              .then(data => {
                logs.todayLog = data.rows;
                res.send(logs);
              })
              .catch(error => console.log(error));
          })
          .catch(e => console.log(e));
      })
      .catch(error => console.log(error));
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
              .catch(error => console.log(error));
          });
        } else {
          res.send("user exist");
        }
      })
      .catch(e => console.log(e));
  },
  login: (req, res) => {
    let username = req.body.userName;
    let pw = req.body.password;
    db.query(`SELECT * FROM users WHERE username = '${username}'`)
      .then(result => {
        let user = result.rows[0];
        if (user) {
          let userInfo = {
            username: user.username,
            userid: user.userid
          };
          //compare pw with hash
          bcrypt.compare(pw, user.password).then(function(result) {
            if (result) {
              res
                .cookie("user_id", user.userid, {
                  httpOnly: true,
                  // secure: req.app.get("env") !== "development",
                  secure: false,
                  signed: true
                })
                .send(userInfo);
            } else {
              res.send("invalid login");
            }
          });
        } else {
          res.send("invalid login");
        }
      })
      .catch(e => console.log(e));
  },
  defLogin: (req, res) => {
    db.query(`SELECT userid, username from users WHERE userid = '${req.signedCookies.user_id}'`)
      .then(data => {
        res.send(data.rows[0]);
      })
      .catch(e => console.log(e));
  },
  logout: (req, res) => {
    res.clearCookie("user_id").end();
  },
  getNotes: (req, res) => {
    db.query(
      `SELECT level, posting_at, note, logid from logs WHERE userid = '${req.params.userId}' AND note IS NOT NULL ORDER BY logid DESC LIMIT 10`
    )
      .then(result => {
        res.send(result.rows);
      })
      .catch(e => console.log(e));
  },
  changeUserName: (req, res) => {
    db.query(`UPDATE users SET username = '${req.body.newVal}' WHERE userid = '${req.body.userId}' `)
      .then(result => {
        res.sendStatus(200);
      })
      .catch(e => console.log(e));
  },
  changePassword: (req, res) => {
    let userId = req.body.userId;
    let pw = req.body.newVal;
    db.query(`SELECT * FROM users WHERE userid = '${userId}'`)
      .then(result => {
        let user = result.rows[0];
        if (user) {
          bcrypt.hash(pw, 10).then(function(hash) {
            db.query(`UPDATE users SET password = '${hash}' WHERE userid = '${userId}'`)
              .then(result => {
                res.sendStatus(200);
              })
              .catch(e => console.log(e));
          });
        }
      })
      .catch(e => console.log(e));
  }
};

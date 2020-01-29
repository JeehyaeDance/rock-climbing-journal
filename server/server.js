const express = require("express");
const app = express();
const port = 3001;
const path = require("path");
const bodyParser = require("body-parser");
const cb = require("./routeHandler.js");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var authMiddleware = require("./middleware.js");

app.use(express.static("public"));

app.use(cookieParser("My Secret"));

app.use(
  cors({
    credentials: true
  })
);

app.get("/*", function(req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../public/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/api", authMiddleware.ensureLoggedIn, cb.defLogin);

app.get("/logs/:userId", bodyParser.json(), cb.getLogs);

app.post("/log", bodyParser.json(), cb.logWork);

app.post("/createAcc", bodyParser.json(), cb.createAcc);

app.post("/login", bodyParser.json(), cb.login);

app.listen(port, () => console.log(`server is watching on port ${port}!`));

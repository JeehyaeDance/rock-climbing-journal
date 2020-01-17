const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cb = require("./routeHandler.js");

app.use(express.static("public"));

app.use("/", (req, res, next) => {
  req.userId = "climber";
  next();
});

app.get("/status", bodyParser.json(), () => {
  console.log("hit it");
});

app.get("/login/:userName", bodyParser.json(), cb.loginInfo);

app.get("/logs/:userId", bodyParser.json(), cb.getLogs);

app.post("/user", bodyParser.json(), cb.addUser);

app.post("/log", bodyParser.json(), cb.logWork);

app.post("/signup", bodyParser.json(), (req, res) => {
  res.json({
    message: "hi there"
  });
});

app.listen(port, () => console.log(`server is listening on port ${port}!`));

const express = require("express");
const app = express();
const port = 3000;
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

app.use("/user", authMiddleware.ensureLoggedIn, cb.login);

app.get("/status", bodyParser.json(), () => {
  console.log("hit it");
});

app.get("/logs/:userId", bodyParser.json(), cb.getLogs);

app.post("/user", bodyParser.json(), cb.addUser);

app.post("/log", bodyParser.json(), cb.logWork);

app.post("/createAcc", bodyParser.json(), cb.createAcc);

app.post("/login", bodyParser.json(), cb.login);

app.listen(port, () => console.log(`server is watching on port ${port}!`));

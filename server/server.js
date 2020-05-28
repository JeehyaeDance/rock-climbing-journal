// require("custom-env").env(true);
const express = require("express");
const app = express();
const port = 3000;
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

app.get("/auth", authMiddleware.ensureLoggedIn, cb.defLogin);

app.get("/logs/:userId", bodyParser.json(), cb.getLogs);

app.post("/log", bodyParser.json(), cb.logWork);

app.post("/createAcc", bodyParser.json(), cb.createAcc);

app.post("/login", bodyParser.json(), cb.login);

app.get("/logout", cb.logout);

app.get("/getNotes/:userId", cb.getNotes);

app.put("/xUserName", bodyParser.json(), cb.changeUserName);

app.put("/xPassword", bodyParser.json(), cb.changePassword);

app.listen(port, () => console.log(`server is watching on port ${port}!`));

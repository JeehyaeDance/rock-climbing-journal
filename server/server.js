const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cb = require("./routeHandler.js");

app.use(express.static("public"));

app.get("/login/:userName", bodyParser.json(), cb.loginInfo);

app.post("/user", bodyParser.json(), cb.addUser);

app.post("/log", bodyParser.json(), cb.logWork);

app.listen(port, () => console.log(`server is listening on port ${port}!`));

const express = require("express");
const app = express();
const port = 3000;
const cb = require("./routeHandler.js");

app.use(express.static("public"));

app.get("user", cb.getUserLogs);

app.listen(port, () => console.log(`server is listening on port ${port}!`));

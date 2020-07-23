const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

// parse application/json
app.use(bodyParser.json());

let informationStore = require("./controllers/informationStore");
let mailer = require("./controllers/email_service").router;
let database = require("./controllers/database");
let labs = require("./controllers/labs");
let tests = require("./controllers/tests");
let users = require("./controllers/users");

app.use("/mailer", mailer);
app.use("/users", users);
app.use("/labs", labs);
app.use("/tests", tests);
app.use("/infoStore", informationStore);

app.get("/", (req, res) => {
  res.send("Hello from Moon!");
});

app.listen();

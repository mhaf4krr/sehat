const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  next();
});

app.use(express.static("public"));

// parse application/json
app.use(bodyParser.json());

app.engine("html", require("ejs").renderFile);
app.set("views", "views");
app.set("view engine", "html");

let informationStore = require("./controllers/informationStore");
let mailer = require("./controllers/email_service").router;
let database = require("./controllers/database");
let labs = require("./controllers/labs");
let tests = require("./controllers/tests");
let users = require("./controllers/users");
let appointments = require("./controllers/appointments");
let share = require("./controllers/share");
let chart = require("./controllers/chart").Router;

app.use("/chart", chart);
app.use("/share", share);
app.use("/appointments", appointments);
app.use("/mailer", mailer);
app.use("/users", users);
app.use("/labs", labs);
app.use("/tests", tests);
app.use("/infoStore", informationStore);

/* Setting up Sockets */

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/landing-page/landing.html");
});

app.listen(3005);

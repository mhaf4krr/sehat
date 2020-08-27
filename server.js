const express = require("express");
const cors = require("cors");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

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

app.use("/share", share);
app.use("/appointments", appointments);
app.use("/mailer", mailer);
app.use("/users", users);
app.use("/labs", labs);
app.use("/tests", tests);
app.use("/infoStore", informationStore);

/* Setting up Sockets */

app.get("/", (req, res) => {
  res.send("Degree kab milegi Sarkaar !");
});

app.listen(3000);

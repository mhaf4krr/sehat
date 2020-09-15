const express = require("express");
const sendEmail = require("./email_service").sendEmail;
const Router = express.Router();
var bodyParser = require("body-parser");
Router.use(bodyParser.urlencoded({ extended: true }));
const db = require("./database");

Router.post("/book_new", express.json(), async (req, res) => {
  console.log(req.body);
  try {
    await db.insertIntoDatabase("appointments", req.body);
    let mailBody = `Regards, Your appointment has been booked on ${req.body.SELECTED_DATE}.`;
    await sendEmail(req.body.EMAIL, "sehat : Appointment Booked", mailBody);
    res.status(200).send("Booked");
  } catch (error) {
    console.log(error.message);
    res.send(400).send(error.message);
  }
});

Router.post("/check", async (req, res) => {
  try {
    let response = await db.queryDatabase("appointments", req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = Router;

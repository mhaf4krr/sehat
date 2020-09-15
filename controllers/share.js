const express = require("express");

const Router = express.Router();

const sendEmail = require("./email_service").sendEmail;
const db = require("./database");

const Cryptr = require("cryptr");
const cryptr = new Cryptr("sehat");

Router.post("/newShare", async (req, res) => {
  try {
    let emails = [req.body.primary_email, req.body.secondary_email];

    let stringifiedData = JSON.stringify(req.body);
    let encryptedData = cryptr.encrypt(stringifiedData);

    sendEmail(
      emails,
      "sehat : Shareable Link",
      `Dear user, please click on the following link to access the resources which have been authorized for a limited duration to access. <a href="https://sehat.hyderdevelops.ml/share/joinShare?id=${encryptedData}"> Shareable Link </a>`
    );
    res.status(200).send("link send");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error with Shareable Link");
  }
});

Router.get("/joinShare", async (req, res) => {
  let encryptedData = req.query.id;

  let plainData = cryptr.decrypt(encryptedData);
  let data = JSON.parse(plainData);

  let duration = data.duration;
  let user = data.user;
  duration = duration.split(":");

  let duration_seconds = calculateSeconds(duration[0], duration[1]);
  let current_seconds = calculateSeconds(
    new Date().getHours(),
    new Date().getMinutes()
  );

  if (!(duration_seconds > current_seconds)) {
    res.send("Sorry, the link has already exprired.");
  } else {
    let testData = await db.queryDatabase("tests", { PHONE: user.PHONE });

    let structured_test_data = extractAllTests(testData);
    res.render("share", { data: structured_test_data, user: user });
  }
});

function calculateSeconds(hours, minutes) {
  let h_sec = hours * 3600;
  let m_sec = minutes * 60;
  return h_sec + m_sec;
}

function extractAllTests(array) {
  let temp = [];
  array.forEach((test) => {
    test.test.forEach((item) => {
      temp.push({
        TEST_UID: test.TEST_UID,
        TIMESTAMP: test.TIMESTAMP,
        TEST_LABEL: item.LABEL,
        RESULT: item.RESULT,
        MAX: item.RANGE.max,
        MIN: item.RANGE.min,
      });
    });
  });

  return temp;
}

module.exports = Router;

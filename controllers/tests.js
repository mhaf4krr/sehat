const db = require("./database");
const express = require("express");
const router = express.Router();
let getUid = require("get-uid");

/* API for user Registration and Saving it to DB */

router.post("/add", async (req, res) => {
  try {
    let data = req.body;
    console.log(data);

    if (Object.keys(data) == 0) {
      res.send("Youre Sending no data, Chaman");
    } else {
      let TEST_UID = getUid();

      data.TEST_UID = TEST_UID;
      await db.insertIntoDatabase("tests", data);
      res.send(`${TEST_UID}`);
    }
  } catch (error) {
    res.send(error);
  }
});

router.post("/getOne", async (req, res) => {
  try {
    let test_id = req.query.id;
    let result = await db.queryDatabase("tests", { TEST_UID: test_id });
    result = result[0];
    res.send(JSON.stringify(result));
  } catch (error) {
    res.send(error);
  }
});

router.post("/update", async (req, res) => {
  try {
    let test_id = req.body.TEST_UID;
    await db.ReplaceIntoDatabase("tests", { TEST_UID: test_id }, req.body);
    res.status(200).send("Updated");
  } catch (error) {
    console.log(error.message);
    res.send(400).send(error.message);
  }
});

router.post("/getAll", async (req, res) => {
  try {
    let patient_uid = req.query.id;
    let result = await db.queryDatabase("tests", { PHONE: patient_uid });
    result = result;
    res.send(JSON.stringify(result));
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

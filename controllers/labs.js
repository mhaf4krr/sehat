const db = require("./database");
const express = require("express");
const router = express.Router();

/* API for user Registration and Saving it to DB */

router.post("/register", async (req, res) => {
  try {
    let data = req.body;

    if (Object.keys(data) == 0) {
      res.send("Youre Sending no data, Chaman");
    } else {
      await db.insertIntoDatabase("labs", data);
      res.send("LAB Added to DB");
    }
  } catch (error) {
    res.send(JSON.stringify(error));
  }
});

router.post("/login", async (req, res) => {
  try {
    let data = req.body;
    console.log(data);
    let result = await db.queryDatabase("labs", { LAB_ID: data.ID });

    result = result[0];

    console.log(result);

    if (result.length === 0) {
      res.send("ERROR: NO RECORD FOUND");
    } else if (result.PASSWORD === data.PASSWORD) {
      res.status(200).send(result);
    }
  } catch (error) {
    res.send(JSON.stringify(error));
  }
});

router.post("/fetchLab", async (req, res) => {
  try {
    let lab_id = req.query.id;
    let response = await db.queryDatabase("tests", { LAB_ID: lab_id });
    res.send(JSON.stringify(response));
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/fetchAll", async (req, res) => {
  try {
    let response = await db.queryDatabase("labs", {});
    res.json(response);
  } catch (error) {
    res.send(error.message);
  }
});
module.exports = router;

const db = require("./database");
const express = require("express");
const router = express.Router();

router.post("/query", async (req, res) => {
  try {
    let title = req.query.title;
    console.log(title);
    let result = await db.queryDatabase("information", { LABEL: title });
    result = result[0];
    if (result) {
      let data = result.TESTS.map((test) => {
        return {
          LABEL: test.LABEL,
          CID: test.CID,
          RESULT: null,
          RANGE: test.RANGE,
        };
      });

      data = JSON.stringify(data);
      res.status(200).send(data);
    } else {
      res.status(404).send("No such Information");
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/fetchAll", async (req, res) => {
  try {
    let result = await db.queryDatabase("information", {});
    res.json(result);
  } catch (e) {
    res.status(400).send(e.message);
  }
  res.json(result);
});

router.post("/add", async (req, res) => {
  try {
    let result = await db.insertIntoDatabase("information", req.body);
    res.send("DONE");
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

module.exports = router;

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
          RESULT:null,
          RANGE:test.RANGE
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

module.exports = router;

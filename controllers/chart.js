const express = require("express");

const Router = express.Router();

const db = require("./database");

Router.post("/generateChartData", async (req, res) => {
  let phone = req.query.phone;

  let result = await db.queryDatabase("tests", {
    PHONE: phone,
    STATUS: "UPDATED",
  });

  let filtered_data = seperatIntoDiffTests(result);

  res.json(filtered_data);
});

function seperatIntoDiffTests(data) {
  let annual_list = {};

  data.forEach((entry) => {
    console.log(entry.test);

    entry.test.forEach((test) => {
      if (annual_list[test.LABEL]) {
        annual_list[test.LABEL].RESULTS.push({
          value: test.RESULT,
          date: entry["D3"],
        });
      } else {
        annual_list[test.LABEL] = {
          RESULTS: [],
          RANGE: test.RANGE,
        };

        annual_list[test.LABEL].RESULTS.push({
          value: test.RESULT,
          date: entry["D3"],
        });
      }
    });
  });

  return annual_list;
}

exports.Router = Router;

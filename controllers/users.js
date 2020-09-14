const db = require("./database");
const express = require("express");
const mailer = require("./email_service");
const router = express.Router();
const DataStore = require("nedb");
const localDB = new DataStore();
const OTP = require("otp-generator");

/* API for user Registration and Saving it to DB */

router.post("/register", async (req, res) => {
  try {
    let data = req.body;

    if (Object.keys(data) == 0) {
      res.send("Youre Sending no data, Chaman");
    } else {
      await db.insertIntoDatabase("users", data);
      res.send("User Added to DB");
    }
  } catch (error) {
    console.log(error);
    res.send("ERROR OCCURED DURING USER REGISTRATION" + error);
  }
});

router.post("/login", async (req, res) => {
  try {
    let data = req.body;
    let result = await db.queryDatabase("users", { PHONE: data.PHONE });
    console.log(result);

    if (result.length === 0) {
      res.send("ERROR: NO MATCH");
    } else {
      result = result[0];

      if (result.PASSWORD === data.PASSWORD) {
        res.send("LOGIN SUCCESS");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("ERROR OCCURED DURING USER LOGIN" + error);
  }
});

router.post("/generateOTP", async (req, res) => {
  let userPhone = req.query.phone;
  try {
    if (userPhone == "" || userPhone.length < 10) {
      throw new Error("Incorrect Phone Format");
    }

    let user = await db.queryDatabase("users", { PHONE: userPhone });

    if (user.length == 0) {
      throw new Error("No such User");
    } else {
      user = user[0];
      console.log(user);

      /* Check if OTP is already present */

      let result = await findLocalDB({ phone: userPhone });

      if (result.length != 0) {
        result = result[0];

        let otp = result.otp;

        await mailer.sendEmail(
          user.EMAIL,
          "OTP for LOGIN",
          `Howdy, ${user.FULL_NAME}. Your OTP for ${user.PHONE} is ${otp}`
        );

        res.send("OTP GENERATED AND SEND");
      } else {
        let otp_generated = OTP.generate(4, {
          digits: true,
          alphabets: false,
          upperCase: false,
          specialChars: false,
        });

        await insertLocalDB({
          phone: userPhone,
          otp: otp_generated,
        });

        console.log(otp_generated);
        await mailer.sendEmail(
          user.EMAIL,
          "OTP for LOGIN",
          `Howdy, ${user.FULL_NAME}. Your OTP for ${user.PHONE} is ${otp_generated}`
        );

        res.send("OTP GENERATED AND SEND");
      }
    }
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

router.post("/getUserByPhone", async (req, res) => {
  let userPhone = req.query.phone;
  try {
    let user = await db.queryDatabase("users", { PHONE: userPhone });
    if (user[0]) {
      res.json(user[0]);
    } else {
      res.send("No Existing Details");
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/verifyOTP", async (req, res) => {
  let userPhone = req.query.phone,
    otp_rec = req.query.otp;

  try {
    let user_otp = await findLocalDB({
      phone: userPhone,
    });

    if (user_otp.length == 0) {
      throw new Error("No OTP record for this Number");
    } else {
      user_otp = user_otp[0];

      if (user_otp.otp == otp_rec) {
        let user = await db.queryDatabase("users", { PHONE: userPhone });

        user = user[0];

        let result = await removeLocalDB({
          phone: userPhone,
        });

        console.log(result);

        res.status(200).send(JSON.stringify(user));
      } else {
        throw new Error("OTP does not Match");
      }
    }

    console.log(user_otp);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

/* in Memory Database Utility Functions */

async function insertLocalDB(data) {
  return new Promise((resolve, reject) => {
    localDB.insert(data, function (err, newDoc) {
      if (err) {
        reject(err);
      } else {
        resolve(newDoc);
      }
    });
  });
}

async function findLocalDB(data) {
  return new Promise((resolve, reject) => {
    localDB.find(data, function (err, docs) {
      if (err) {
        reject(err);
      } else {
        resolve(docs);
      }
    });
  });
}

async function removeLocalDB(data) {
  return new Promise((resolve, reject) => {
    localDB.remove(data, {}, function (err, docs) {
      if (err) {
        reject(err);
      } else {
        resolve("Removed from localDB");
      }
    });
  });
}

module.exports = router;

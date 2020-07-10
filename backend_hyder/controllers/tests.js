const db = require("./database")
const express = require("express")
const router = express.Router()


/* API for user Registration and Saving it to DB */

router.post("/add",async (req,res)=>{
    try {
        let data = req.body
    
        if(Object.keys(data) == 0){
        res.send("Youre Sending no data, Chaman")
        }   

        else {
         await db.insertIntoDatabase("tests",data)
         res.send("test Added to DB")
        }
    } catch (error) {
        res.send(error)
    }
})


router.post("/getOne", async (req,res)=>{
   try {
       let test_id = req.query.id
       let result = await db.queryDatabase("tests",{TEST_UID:test_id})
       result = result[0]
        res.send(JSON.stringify(result))
   } catch (error) {
       res.send(error)
   }
})



router.post("/getAll", async (req,res)=>{
    try {
        let patient_uid = req.query.id
        let result = await db.queryDatabase("tests",{PATIENT_UID:patient_uid})
        result = result
        res.send(JSON.stringify(result))
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
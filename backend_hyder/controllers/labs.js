const db = require("./database")
const express = require("express")
const router = express.Router()


/* API for user Registration and Saving it to DB */

router.post("/register",async (req,res)=>{
  try {
    let data = req.body
    
    if(Object.keys(data) == 0){
        res.send("Youre Sending no data, Chaman")
    }

    else {
         await db.insertIntoDatabase("labs",data)
         res.send("LAB Added to DB")
    }
  } catch (error) {
     res.send(JSON.stringify(error)) 
  }
})


router.post("/login",async (req,res)=>{
    try {
        let data = req.body
    let result = await db.queryDatabase("labs",{LAB_ID:data.ID})

    if(result.length === 0){
        res.send("ERROR: NO RECORD FOUND")
    }

    else if( result.PASSWORD === data.PASSWORD){
        res.send("LOGIN SUCCESS")
    }
    } catch (error) {
        res.send(JSON.stringify(error)) 
    }
})

module.exports = router
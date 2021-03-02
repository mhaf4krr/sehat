
const nodemailer = require('nodemailer');
const express = require("express")
const router = express.Router()

var transporter = nodemailer.createTransport({
    host: 'karma.solidhosting.pro',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'bot@sehat.hyderdevelops.ml', // your domain email address
      pass: 'root@linux20' // your password
    }
  });



function sendEmail(email,subject,body){
    let mailOptions = {
        from: 'Sehat  <bot@sehat.hyderdevelops.ml>', // sender address
        to: email, // list of receivers
        subject: subject, // Subject line

        html: body, // html body

    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
   })
}


router.get("/",(req,res)=>{
    res.send("Hello from Mailer")
})

router.post("/send",express.json(),(req,res)=>{
    console.log(req.body)
   let { EMAIL,SUBJECT,BODY } = req.body;
   sendEmail(EMAIL,SUBJECT,BODY);
   res.send("Sending your Mail")
})


exports.sendEmail = sendEmail

exports.router = router


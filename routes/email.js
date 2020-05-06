const express = require("express");
const router = express.Router();
// const Note = require("../models/notes");
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {

    const output = `<p>New Contact Request </p>
                    <h3>Contact Details</h3>
                    <ul>
                        <li>Name: ${req.body.name}</li>
                        <li>Email: ${req.body.email}</li>
                        <li>Phone Number: ${req.body.phoneNumber}</li>
                    </ul>
                    <h3>Message</h3>
                    <p>${req.body.message}</p>`;

  //nodemailer stuff
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "projectbangladeshemail@gmail.com",
    pass: "HyKR8dt7WLphhgmL",
  },
});

    // setup email data with unicode symbols
    let mailOptions = {

      from: "Contact Request", // sender address
      to: "projectbangladesh123@gmail.com", // list of receivers
      subject: "Contact Request", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        //redirecting to contact page saying message successfully sent
        res.send({"success": 1});
    });

    // const note = await newNote.save();
    // res.send("Nodemailer running");
    // res.status(200).json(note);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});



module.exports = router;

const express = require("express");
const router = express.Router()
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();




// setup nodemailer configuration
const transporter = nodemailer.createTransport({
    host: process.env.REACT_APP_SMTP_HOST,
    port: process.env.REACT_APP_SMTP_PORT,
    auth: {
        user: process.env.REACT_APP_SMTP_EMAIL,
        pass: process.env.REACT_APP_SMTP_PASS
    }
})

// Verify nodemailer configuration
transporter.verify((err, success) => {
    if (err) {
        console.log("Error", err)
    } else {
        console.log("Successfully mail is configured");
    }
})

router.get('/test', (req, res) => {
    res.send('Hello world')
})

router.post("/send", (req, res) => {
    const { email, name, phone, comment } = req.body


    // Contact Form Email Template
    if ( name !== undefined ) {
        var mailConfig = {
            from: process.env.REACT_APP_SMTP_EMAIL,
            to: "support@erasolutions.us",
            subject: name,
            html: `<html>
            <head>
            <title>HTML email</title>
            </head>
            <body>
            <table width="50%" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
            <td colspan="2" align="center" valign="top"><img style=" margin-top: 15px; " src="https://www.yourdomain.com/assets/img/logo-black.png"></td>
            </tr>
            <tr>
            <td width="50%" align="right">&nbsp;</td>
            <td align="left">&nbsp;</td>
            </tr>
            <tr>
            <td align="right" valign="top" style="border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;">Name:</td>
            <td align="left" valign="top" style="border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;">${name}</td>
            </tr>
            <tr>
            <td align="right" valign="top" style="border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;">Email:</td>
            <td align="left" valign="top" style="border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;">${email}</td>
            </tr>
            <tr>
            <td align="right" valign="top" style="border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;">Phone:</td>
            <td align="left" valign="top" style="border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;">${phone}</td>
            </tr>
            <tr>
            <td align="right" valign="top" style="border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;">Message:</td>
            <td align="left" valign="top" style="border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;">${comment}</td>
            </tr>
            </table>
            </body>
            </html>`
        }
    } else {

        // Newsletter Form Email Template
        var mailConfig = {
            from: process.env.REACT_APP_SMTP_EMAIL,
            to: email,
            subject: name,
            html: `<html>
            <head>
            <title>HTML email</title>
            </head>
            <body>
            <table width="50%" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
            <td colspan="2" align="center" valign="top">Thank you for subscribing to our email service.</td>
            </tr>
            <tr>
            <td colspan="2" align="center" valign="top"><img style=" margin-top: 15px; " src="https://www.yourdomain.com/assets/img/logo-black.png"></td>
            </tr>
            <tr>
            <td width="50%" align="right">&nbsp;</td>
            <td align="left">&nbsp;</td>
            </tr>
            <tr>
            <td align="right" valign="top" style="border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;">Email:</td>
            <td align="left" valign="top" style="border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;">${email}</td>
            </tr>
            </table>
            </body>
            </html>`
        }
    }

    transporter.sendMail(mailConfig, (err, data) => {
        if (err) {
            console.log(err);
            res.json({
                status: "fail"
            })
        } else {
            console.log("mail is successfully sent");
            res.json({
                status: 'success'
            })
        }
    })
})

module.exports = router
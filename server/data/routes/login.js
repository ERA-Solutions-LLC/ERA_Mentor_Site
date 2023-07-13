const express = require('express');
const router = express.Router();
const { json } = require('body-parser');
const CompanyUserLogin = require('../../models/loginModel');


router.post('/', async (req, res) => {
    //res.send('Nice...')
    //let userNum = Math.random();
    //let userNameString = "user"+userNum;
    /*let formData = {
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      phone_number: req.body.phoneNumber,
      dob: "1988-02-12",
      age: "0",
      gender: "female",
      username: userNameString, 
      password: req.body.password
    }*/
    let emailReceived = req.body.email;
    let passwordReceived = req.body.password;
    try {
      console.log("Trying to validate...");
      let dbResponse = await CompanyUserLogin.authenticateLogin(emailReceived);
      let passwordFromDB = dbResponse.password;
      let emailFromDB = dbResponse.email;
      if(passwordFromDB === passwordReceived){
        if(emailFromDB === "a.griffith@erasolutions.us"){
          res.status(201).json({ message: 'Login approved for HR', is_hr: true, authenticated: true });
          } else{
            res.status(201).json({ message: 'Login approved', is_hr: false, authenticated: true });
          }   
        }
        else{
            res.status(201).json({message: 'User not found, please create a user', is_hr: false, authenticated: false});
        }
    } catch (error) {
      res.status(500).json({ error: error.message, message: 'Failed to reach database for authentication' });
    }
  });

  module.exports = router;
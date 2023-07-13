const express = require('express');
const router = express.Router();
const { json } = require('body-parser');
const CompanyUser = require('../../models/company_user_model');


router.get('/', async (req, res) => {
  res.send("Made it to the endpoint...")
  try {
    const companyUsers = await CompanyUser.getAllCompanyUsers();
    res.json(companyUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const { id } = req.params;
    const companyUser = await CompanyUser.findCompanyUserById(id);
    if (companyUser) {
      res.json(companyUser);
    } else {
      res.status(404).json({ message: 'Company user by that id not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  //res.send('Nice...')
  let userNum = Math.random();
  let userNameString = "user"+userNum;
  let formData = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    phone_number: req.body.phoneNumber,
    dob: "1988-02-12",
    age: "0",
    gender: "female",
    username: userNameString, 
    password: req.body.password
  }
  try {
    console.log("Trying to insert");
    console.log(formData);
    await CompanyUser.insertCompanyUser(formData);
    res.status(201).json({ message: 'Company user created' });
  } catch (error) {
    res.status(500).json({ error: error.message, message: 'Failed to create company user' });
  }
});

router.put('/', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await CompanyUser.updateCompanyUser(req.body, id);
    if (!updatedUser) {
      res.status(404).json({ message: 'No company user by that id exists' });
    } else {
      const companyUser = await CompanyUser.findCompanyUserById(id);
      res.json(companyUser);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await CompanyUser.deleteCompanyUser(id);
    if (!deletedUser) {
      res.status(404).json({ message: 'No company user by that id exists' });
    } else {
      res.json({ message: 'Company user deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

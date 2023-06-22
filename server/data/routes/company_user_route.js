const express = require('express');
const router = express.Router();
const { json } = require('body-parser');
const CompanyUser = require('../../models/company_user_model');

router.get('/getcompanyusers', async (req, res) => {
  try {
    const companyUsers = await CompanyUser.getAllCompanyUser();
    res.json(companyUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/getcompanyuser/:id', async (req, res) => {
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

router.post('/insertcompanyuser', async (req, res) => {
  try {
    await CompanyUser.insertCompanyUser(req.body);
    res.status(201).json({ message: 'Company user created' });
  } catch (error) {
    res.status(500).json({ error: error.message, message: 'Failed to create company user' });
  }
});

router.put('/updatecompanyuser/:id', async (req, res) => {
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

router.delete('/deletecompanyuser/:id', async (req, res) => {
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

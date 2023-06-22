const express = require('express');
const router = express.Router();
const { json } = require('body-parser');
const EmployeeDetails = require('../../models/employee_details');

router.get('/getemployeedetails', async (req, res) => {
  try {
    const employeeDetails = await EmployeeDetails.getAllEmployeeDetails();
    res.json(employeeDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/getemployeedetails/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employeeDetails = await EmployeeDetails.findEmployeeDetailsById(id);
    if (employeeDetails) {
      res.json(employeeDetails);
    } else {
      res.status(404).json({ message: 'Employee details by that id not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/insertemployeedetails', async (req, res) => {
  try {
    await EmployeeDetails.insertEmployeeDetails(req.body);
    res.status(201).json({ message: 'Employee details created' });
  } catch (error) {
    res.status(500).json({ error: error.message, message: 'Failed to create employee details' });
  }
});

router.put('/updateemployeedetails/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDetails = await EmployeeDetails.updateEmployeeDetails(req.body, id);
    if (!updatedDetails) {
      res.status(404).json({ message: 'No employee details by that id exist' });
    } else {
      const employeeDetails = await EmployeeDetails.findEmployeeDetailsById(id);
      res.json(employeeDetails);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/deleteemployeedetails/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDetails = await EmployeeDetails.deleteEmployeeDetails(id);
    if (!deletedDetails) {
      res.status(404).json({ message: 'No employee details by that id exist' });
    } else {
      res.json({ message: 'Employee details deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { json } = require('body-parser');
const EmployeeDetails = require('../../models/employee_details');

router.get('/', async (req, res) => {
  try {
    const employeeDetails = await EmployeeDetails.getAllEmployeeDetails();
    res.json(employeeDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', (req, res) => {
    const { id } = req.params
    EmployeeDetails.findEmployeeDetailsById(id)
    .then(employee_details => {
        if(employee_details) {
            res.status(200).json(employee_details)
        }
        else {
            res.status(400).json({message: 'Employee details by that id not found'})
        }
    })
})


router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
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

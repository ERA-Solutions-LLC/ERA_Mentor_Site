const router = require('express').Router()
const { json } = require('body-parser')

const Employee_details = require('../../models/employee_details')

router.get('/employee-details/', (req, res) => {
    Employee_details.getAllEmployeeDetails()
    .then(employee_details => {
        res.json(employee_details)
    })
    .catch(err => res.send(err))
})

router.get('/employee-details/:id', (req, res) => {
    const { id } = req.params
    Employee_details.findEmployeeDetailsById(id)
    .then(employee_details => {
        if(employee_details) {
            res.status(200).json(employee_details)
        }
        else {
            res.status(400).json({message: 'Employee details by that id not found'})
        }
    })
})

router.post('/insertemployeedetails:', (req, res) => {
    req.body.ed_id = req.params.id
    Employee_details.insertEmployeeDetails(req.body)
    .then(e => {
        res.status(201).json({message: 'Employee details created'})
    })
    .catch(err => {
        res.status(500).json({...err, message: 'Failed to create employee details'})
    })
})

router.put('/updateemployeedetails/:id', (req, res) => {
    Employee_details.updateEmployeeDetails(req.body, req.params.id)
    .then(updateemployeeDetails => {
        if(!updateemployeeDetails) {
            res.status(400).json({ message: 'No employee details by that id exist'})
        } else {
            Employee_details.findEmployeeDetailsById(req.params.id)
            .then(employeedetails => {
                res.status()
            })
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/deleteemployeedetails/:id', (req, res) => {
    Employee_details.deleteEmployeeDetails(req.params.id)
    .then(employeedetails => {
        if(!employeedetails) {
            res.status(400).json({message: 'No employee details by that id exist'})
        } else {
            res.status(200).json({ message: 'Employee details deleted'})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;
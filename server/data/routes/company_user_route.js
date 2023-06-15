const router = require('express').Router()
const { json } = require('body-parser')

const Company_user = require('../../models/company_user_model')

router.get('/getcompanyusers/', (req, res) => {
    Company_user.getAllCompanyUser()
    .then(company_user => {
        res.json(company_user)
    })
    .catch(err => res.send(err))
})

router.get('/getcompanyuser/:id', (req, res) => {
    const { id } = req.params
    Company_user.findCompanyUserById(id)
    .then(company_user => {
        if(company_user) {
            res.status(200).json(company_user)
        }
        else {
            res.status(400).json({message: 'company user by that id not found'})
        }
    }) 
})

router.post('/insertcompanyuser/:', (req, res) => {
    req.body.company_user_id = req.params.id
    Company_user.insertCompanyUser(req.body)
    .then(e => {
        res.status(201).json({message: 'company user created'})
    })
    .catch(err => {
        res.status(500).json({...err, message: 'failed to create company user' })
    })
})

router.put('/updatecompanyuser/:id', (req, res) => {
    Company_user.updateCompanyUser(req.body, req.params.id)
    .then(updateUser => {
        if(!updateUser) {
            res.status(404).json({ message: 'No company user by that id exist'})
        } else {
            Company_user.findCompanyUserById(req.params.id)
            .then(CompanyUser => {
               res.status() 
            })
        }
})
 .catch(err => {
    res.status(500).json(err)
 }) 
})

router.delete('/deletecompanyuser/:id', (req,res) => {
    Company_user.deleteCompanyUser(req.params.id)
    .then(user =>  {
        if(!user)  {
            res.status(400).json({message: 'No company user by that id exist'})
        } else {
            res.status(200).json({ message: 'Company user deleted'})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;
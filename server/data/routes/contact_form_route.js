const router = require('express').Router()
const { json } = require('body-parser')

const Contact_form = require('../../models/contact_form_model')

router.get('/getcontactform/', (req, res) => {
    Contact_form.getAllContactForm()
    .then(contact_form => {
        res.json(contact_form)
    })
    .catch(err => res.send(err))
})

router.get('/getcontactform/:id', (req, res) => {
    const { id } = req.params
    Contact_form.findContactFormById(id)
    .then(contact_form => {
        if(contact_form) {
            res.status(200).json(contact_form)
        }
        else {
            res.status(400).json({message: 'contact form by that id not found'})
        }
    }) 
})

router.post('/insertcontactform/:', (req, res) => {
    req.body.client_id = req.params.id
    Contact_form.insertContactForm(req.body)
    .then(e => {
        res.status(201).json({message: 'contact form user created'})
    })
    .catch(err => {
        res.status(500).json({...err, message: 'failed to create contact form' })
    })
})

router.put('/updatecontactform/:id', (req, res) => {
    Contact_form.updateContactForm(req.body, req.params.id)
    .then(updateContactForm => {
        if(!updateContactForm) {
            res.status(404).json({ message: 'No contact form by that id exist'})
        } else {
            Contact_form.findContactFormById(req.params.id)
            .then(Contact_form => {
               res.status() 
            })
        }
})
 .catch(err => {
    res.status(500).json(err)
 }) 
})

router.delete('/deletecontactform/:id', (req,res) => {
    Contact_form.deleteContactForm(req.params.id)
    .then(contact_form =>  {
        if(!contact_form)  {
            res.status(400).json({message: 'No contact form by that id exist'})
        } else {
            res.status(200).json({ message: 'Contact form deleted'})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;






const express = require('express');
const router = express.Router();
const { json } = require('body-parser');
const ContactForm = require('../../models/contact_form_model');

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.get('contact-form', async (req, res) => {
  try {
    const contactForm = await ContactForm.getAllContactForm();
    res.json(contactForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/contact-form/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const contactForm = await ContactForm.findContactFormById(id);
    if (contactForm) {
      res.json(contactForm);
    } else {
      res.status(404).json({ message: 'Contact form by that id not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/contact-form', async (req, res) => {
  try {
    await ContactForm.insertContactForm(req.body);
    res.status(201).json({ message: 'Contact form user created' });
  } catch (error) {
    res.status(500).json({ error: error.message, message: 'Failed to create contact form' });
  }
});

router.put('/contact-form/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContactForm = await ContactForm.updateContactForm(req.body, id);
    if (!updatedContactForm) {
      res.status(404).json({ message: 'No contact form by that id exists' });
    } else {
      const contactForm = await ContactForm.findContactFormById(id);
      res.json(contactForm);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/contact-form/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContactForm = await ContactForm.deleteContactForm(id);
    if (!deletedContactForm) {
      res.status(400).json({ message: 'No contact form by that id exists' });
    } else {
      res.json({ message: 'Contact form deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;







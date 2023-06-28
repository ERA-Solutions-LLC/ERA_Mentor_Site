const express = require('express');

const router = express.Router();

const {json} = require('body-parser')

const PayRoll = require('../../models/payroll_model');

router.get('/payroll', async (req, res) => {

  try {

    const payRoll = await PayRoll.getAllPayroll();

    res.json(payRoll);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

router.get('/payroll/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const payRoll = await PayRoll.findLeaveTimeById(id);

    if (payRoll) {

      res.json(payRoll);

    } else {

      res.status(404).json({ message: 'payroll not found' });

    }

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

router.post('/insert-payroll', async (req, res) => {

  try {

    const insertedPayRoll = await PayRoll.insertPayRoll(req.body);

    res.status(201).json({ message: 'payroll created' });

  } catch (error) {

    res.status(500).json({ error: error.message, message: 'Failed to create payroll' });

  }

});

router.put('/update-payroll/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const updatedPayRoll = await PayRoll.updatedPayRoll(req.body, id);

    if (updatedPayRoll) {

      const payRoll = await PayRoll.findPayRollById(id);

      res.json(payRoll);

    } else {

      res.status(404).json({ message: 'payroll not found' });

    }

  } catch (error) {

    res.status(500).json({ error: error.message });
}

});

router.delete('/delete-payroll/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const deletedPayRoll = await PayRoll.deletePayRoll(id);

    if (deletedPayRoll) {

      res.json({ message: 'payroll deleted' });

    } else {

      res.status(404).json({ message: 'payroll not found' });

    }

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

module.exports = router;

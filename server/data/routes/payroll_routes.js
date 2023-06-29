const express = require('express');

const router = express.Router();

const {json} = require('body-parser')

const payRoll = require('../../models/payroll');

router.get('/leave-time', async (req, res) => {

  try {

    const PayRoll = await payRoll.getAllPayRoll();

    res.json(PayRoll);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

router.get('/payroll/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const PayRoll = await payRoll.findLeaveTimeById(id);

    if (PayRoll) {

      res.json(PayRoll);

    } else {

      res.status(404).json({ message: 'payroll not found' });

    }

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

router.post('/insert-payroll', async (req, res) => {

  try {

    const insertedPayRoll = await payRoll.insertPayRoll(req.body);

    res.status(201).json({ message: 'payroll created' });

  } catch (error) {

    res.status(500).json({ error: error.message, message: 'Failed to create payroll' });

  }

});

router.put('/update-payroll/:id'), async (req, res) => {

  try {

    const { id } = req.params;

    const updatedPayRoll = await payRoll.updateLeaveTime(req.body, id);

    if (updatedPayRoll) {

      const PayRoll = await payRoll.findPayRollById(id);

      res.json(PayRoll);

    } else {

      res.status(404).json({ message: 'payroll not found' });

    }

  } catch (error) {

    res.status(500).json({ error: error.message });
}

};

router.delete('/delete-payroll/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const deletedPayRoll = await payRoll.deletePayRoll(id);

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

const express = require('express');
const router = express.Router();
const {json} = require('body-parser')
const LeaveTime = require('../../models/leave_time');

router.get('/', async (req, res) => {
  try {
    const leaveTime = await LeaveTime.getAllLeaveTime();
    res.json(leaveTime);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const leaveTime = await LeaveTime.findLeaveTimeById(id);
    if (leaveTime) {
      res.json(leaveTime);
    } else {
      res.status(404).json({ message: 'Leave time not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const insertedLeaveTime = await LeaveTime.insertLeaveTime(req.body);
    if (insertedLeaveTime) {
      res.status(201).json({ message: 'Leave time created' });
    } else {
      res.status(400).json({ message: 'Failed to create leave time' });
    }
  } catch (error) {
    res.status(500).json(({error: error.message, message: 'Server error'}));
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedLeaveTime = await LeaveTime.updateLeaveTime(req.body, id);
    if (updatedLeaveTime) {
      const leaveTime = await LeaveTime.findLeaveTimeById(id);
      res.json(leaveTime);
    } else {
      res.status(404).json({ message: 'Leave time not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLeaveTime = await LeaveTime.deleteLeaveTime(id);
    if (deletedLeaveTime) {
      res.json({ message: 'Leave time deleted' });
    } else {
      res.status(404).json({ message: 'Leave time not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;


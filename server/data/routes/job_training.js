const express = require('express');

const router = express.Router();

const {json} = require('body-parser')

const jobTraining = require('../../models/job_training');




router.get('/job_training', async (req, res) => {

  try {

    const JobTraining = await jobTraining.getAllJobTraining();

    res.json(JobTraining);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

router.get('/job-training/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const JobTraining = await jobTraining.findJobTrainingById(id);

    if (JobTraining) {

      res.json(JobTraining);

    } else {

      res.status(404).json({ message: 'job_training time not found' });

    }

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

router.post('/insert-job_training', async (req, res) => {

  try {

    const insertedJobTraining = await jobTraining.insertJobTraining(req.body);

    res.status(201).json({ message: 'job_training time created' });

  } catch (error) {

    res.status(500).json({ error: error.message, message: 'Failed to create job_training' });

  }

});

router.put('/update-job_training/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const updatedJobTraining = await jobTraining.updateJobTraining(req.body, id);

    if (updatedJobTraining) {

      const JobTraining = await jobTraining.findJobTrainingById(id);

      res.json(JobTraining);

    } else {

      res.status(404).json({ message: 'job_training not found' });

    }

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

router.delete('/delete-job_training/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const deletedJobTraining = await jobTraining.deleteLeaveTime(id);

    if (deletedJobTraining) {

      res.json({ message: 'job_training deleted' });

    } else {

      res.status(404).json({ message: 'job_training not found' });

    }

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});
module.exports = router;
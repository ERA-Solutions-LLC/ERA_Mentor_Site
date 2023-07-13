const express = require('express');

const router = express.Router();

const {json} = require('body-parser')

const jobTraining = require('../../models/job_training_models');




router.get('/', async (req, res) => {

  try {

    const JobTraining = await jobTraining.getAllJobTraining();

    res.json(JobTraining);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

router.get('/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const JobTraining = await jobTraining.findJobTrainingById(id);

    if (JobTraining) {

      res.json(JobTraining);

    } else {

      res.status(404).json({ message: 'job training time not found' });

    }

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

router.post('/', async (req, res) => {

  try {

    const insertedJobTraining = await jobTraining.insertJobTraining(req.body);

    if(insertedJobTraining) {

      res.status(201).json({ message: 'job training created' });
    } else {
      res.status(400).json({message: 'could not create job training  '})
    }

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
});

router.put('/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const updatedJobTraining = await jobTraining.updateJobTraining(req.body, id);

    if (updatedJobTraining) {

      const JobTraining = await jobTraining.findJobTrainingById(id);

      res.json(JobTraining);

    } else {

      res.status(404).json({ message: 'job training not found' });

    }

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

router.delete('/:id', async (req, res) => {

  try {

    const { id } = req.params;

    const deletedJobTraining = await jobTraining.deleteLeaveTime(id);

    if (deletedJobTraining) {

      res.json({ message: 'job training deleted' });

    } else {

      res.status(404).json({ message: 'job training not found' });

    }

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});
module.exports = router;
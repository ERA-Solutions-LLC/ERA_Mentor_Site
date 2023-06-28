const knex = require('../data/dbConfig');

function getAllJobTraining() {
  return knex('job_training').select('*');
}

function findJobTrainingById(id) {
  return knex('job_training').select('*').where({ id: id }).first();
}

function insertJobTraining(JobTraining) {
  return knex('job_training').insert(JobTraining);
}

function updateJobTraining(id, JobTraining) {
  return knex('job_training').where({ id: id }).update(JobTraining);
}

function deleteJobTraining(id) {
  return knex('job_training').where({ id: id }).del();
}

module.exports = {
  getAllJobTraining,
  findJobTrainingById,
  insertJobTraining,
  updateJobTraining,
  deleteJobTraining
};

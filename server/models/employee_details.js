const knex = require('../data/dbConfig');

function getAllEmployeeDetails() {
  return knex('employee_details').select('*');
}

function findEmployeeDetailsById(id) {
  return knex('employee_details').select('*').where({ id }).first();
}

function insertEmployeeDetails(employee_details) {
  return knex('employee_details').insert(employee_details);
}

function updateEmployeeDetails(id, employee_details) {
  return knex('employee_details').where({ id }).update(employee_details);
}

function deleteEmployeeDetails(id) {
  return knex('employee_details').where({ id }).del();
}

module.exports = {
  getAllEmployeeDetails,
  findEmployeeDetailsById,
  insertEmployeeDetails,
  updateEmployeeDetails,
  deleteEmployeeDetails
};

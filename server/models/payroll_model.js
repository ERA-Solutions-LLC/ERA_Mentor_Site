const knex = require('../data/dbConfig');

async function getAllPayroll() {
  return knex('payroll').select('*');
}

async function findPayrollById(id) {
  return knex('payroll').select('*').where({ pr_id: id }).first();
}

async function insertPayroll(payroll) {
  return knex('payroll').insert(payroll);
}

async function updatePayroll(id, payroll) {
  return knex('payroll').where({ pr_id: id }).update(payroll);
}

async function deletePayroll(id) {
  return knex('payroll').where({ pr_id: id }).del();
}

module.exports = {
  getAllPayroll,
  findPayrollById,
  insertPayroll,
  updatePayroll,
  deletePayroll,
};

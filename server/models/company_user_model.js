const knex = require('../data/dbConfig');

function getAllCompanyUsers() {
  return knex('company_user').select('*');
}

function findCompanyUserById(id) {
  return knex('company_user').select('*').where({ id }).first();
}

function insertCompanyUser(company_user) {
  return knex('company_user').insert(company_user);
}

function updateCompanyUser(id, company_user) {
  return knex('company_user').where({ id }).update(company_user);
}

function deleteCompanyUser(id) {
  return knex('company_user').where({ id }).del();
}

module.exports = {
  getAllCompanyUsers,
  findCompanyUserById,
  insertCompanyUser,
  updateCompanyUser,
  deleteCompanyUser
};

const knex = require('./../data/dbConfig');


function getAllCompanyUsers() {
  //console.log('Knex variable:', knex);
  return knex('company_user').select('*');
}


async function findCompanyUserById(id) {
    return await knex('company_user').select('*').where({company_user_id: id}).first()
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

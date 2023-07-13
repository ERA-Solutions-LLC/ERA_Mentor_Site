const knex = require('./../data/dbConfig');

function authenticateLogin(loginData) {
    return knex('company_user').select('*').where({email: loginData}).first()
  }

module.exports = {
    authenticateLogin
};
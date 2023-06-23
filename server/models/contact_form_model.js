const knex = require('../data/dbConfig');

function getAllContactForm() {
  return knex('contact_form').select('*');
}

function findContactFormById(id) {
  return knex('contact_form').select('*').where({ id }).first();
}

function insertContactForm(contact_form) {
  return knex('contact_form').insert(contact_form);
}

function updateContactForm(id, contact_form) {
  return knex('contact_form').where({ id }).update(contact_form);
}

function deleteContactForm(id) {
  return knex('contact_form').where({ id }).del();
}

module.exports = {
  getAllContactForm,
  findContactFormById,
  insertContactForm,
  updateContactForm,
  deleteContactForm
};

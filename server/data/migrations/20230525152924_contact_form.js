/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.renameTable('client_user', 'contact_form');
  return knex.schema.renameColumn('fName', 'first_name')
  return knex.schema.renameColumn('lName','last_name')
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.renameTable('contact_form', 'client_user')
  return knex.schema.renameColumn('first_name', 'fName')
  return knex.schema.renameColumn('last_name', 'lName')
  
};

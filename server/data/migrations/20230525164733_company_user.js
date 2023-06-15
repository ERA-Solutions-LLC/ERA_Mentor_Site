/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('company_user', table => {
        table.renameColumn('fName', 'first_name')
        table.renameColumn('lName','last_name')
      })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('company_user', table => {
        table.renameColumn('first_name', 'fName')
        table.renameColumn('last_name', 'lName') 
    })
  
};

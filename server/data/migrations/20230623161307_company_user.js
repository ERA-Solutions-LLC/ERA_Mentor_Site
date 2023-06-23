/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('company_user', table => {
        table.boolean('is_hr').defaultTo(false);
    } )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('company_user', table => {
        table.dropColumn('is_hr');
      });
};

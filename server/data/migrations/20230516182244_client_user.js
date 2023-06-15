/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('client_user', table => {
        table.increments('client_id').primary()

            table.string('fName', 20).notNullable()

            table.string('lName', 20).notNullable()

            table.string('email', 50).notNullable()

            table.string('subject', 30).notNullable()

            table.string('message').notNullable() 
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('client_user')
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('contact_form', table => {
        table.increments('contact_form').primary()

            table.string('first_name', 20).notNullable()

            table.string('last_name', 20).notNullable()

            table.string('email', 50).notNullable()

            table.string('phone_number', 20).notNullable()

            table.string('subject', 30).notNullable()

            table.string('message').notNullable() 
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('contact_form') 
};

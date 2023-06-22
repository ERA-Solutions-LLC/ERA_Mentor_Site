/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('leave_time', table => {
        table.increments('lt_id').primary()

            table.decimal('hours_off', 3, 2).notNullable()

            table.decimal('leave_days', 3, 2).notNullable()

            table.decimal('sick_days',3, 2 ).notNullable()

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('leave_time') 
};

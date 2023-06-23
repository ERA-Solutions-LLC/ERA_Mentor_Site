/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('job_seeking', table => {
        table.increments('js_id').primary()
    
        //I comment out the bottom column until i understand how to use FK references

        table.integer('js_user_id').unsigned()

        //table.foreign('js_user_id').references('ed_user_id.employee_details')
    
        table.string('js_available_jobs', 255).notNullable()
    
        table.string('js_available_promotion', 150).notNullable()
    
        table.date('js_start_date').notNullable()
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('job_seeking') 
};

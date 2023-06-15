/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('employee_details', table => {
        table.increments('ed_id').primary()
       
            table.integer('ed_user_id').unsigned()

           // table.foreign('ed_user_id').references('company_user_id.company_user')

            table.string('ed_job_title', 50).notNullable()

            table.string('ed_certification').notNullable()

            table.date('ed_start_date').notNullable()

            //broke the address table for better flexibility
            table.string('ed_address_line1').notNullable()
            
            table.string('ed_address_line2').notNullable()

            table.string('ed_address_city').notNullable()
            
            table.string('ed_address_state').notNullable()

            table.string('ed_address_zipcode').notNullable()
            
            table.integer('ed_salary').notNullable()

            table.string('ed_job_training').notNullable()

            table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
 return knex.schema.dropTableIfExists('employee_details')
};

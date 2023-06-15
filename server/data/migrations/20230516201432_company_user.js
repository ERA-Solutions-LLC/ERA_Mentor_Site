/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('company_user', table => {
        table.increments('company_user_id').primary()

            table.string('fName', 50).notNullable()

            table.string('lName', 50).notNullable()

             //when with unique to allow the use of email for authentication
            table.string('email', 75).notNullable().unique()

             //with a mask the character length can be 13
            table.string('phone_number', 20).notNullable()

             //Front-end can auto age from DOD
            table.date('dob').notNullable()
            
            table.smallint('age', 3).notNullable()

            //choose to go with a string for cultural awareness
            table.string('gender', 20).notNullable()
            
            table.string('username', 75).notNullable().unique()
            
            table.string('password', 50).notNullable()
           
           
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('company_user')
};


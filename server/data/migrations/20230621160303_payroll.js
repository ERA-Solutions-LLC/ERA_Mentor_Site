/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('payroll', table => {
        table.increments('pr_id').primary()
    
        table.integer('pr_user_id').unsigned()
        
        table.decimal('pr_work_hours',4).notNullable()
    
        table.decimal('pr_hourly_rate', 4).notNullable()
    
        table.decimal('pr_contract_pay', 6).notNullable()

        table.string('pr_banking_name', 30).notNullable()

        table.string('pr_banking_routing', 9).notNullable()

        table.string('pr_banking_account', 12).notNullable()


      })
};
    



/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('payroll') 

};

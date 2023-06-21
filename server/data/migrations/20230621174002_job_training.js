/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('job_seeking', table => {
        table.increments('jt_id').primary()
    
        table.integer('jt_user_id').unsigned
        
        table.string('jt_courses', 500).notNullable()
    
        table.string('jt_hours', 500).notNullable()
    
        table.string('js_completed_course', 500).notNullable()
      })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

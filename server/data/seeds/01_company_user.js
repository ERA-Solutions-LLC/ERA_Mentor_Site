/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('company_user').del()
  await knex('company_user').insert([
    {first_name: 'anthony', last_name: 'rosado', email: 'dhbfuvb@vhbv.com', phone_number:'111-111-1111', dob: '1988-02-12', age: 90, gender: 'male', username: 'aaaaaaaaaa', password:'12345678'},
   

  ]);
};

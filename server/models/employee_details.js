const knex =require('../data/dbConfig')

async function getAllEmployeeDetails() {
    return await knex('employee_details').select('*')
}

async function findEmployeeDetailsById(id) {
    return await knex('employee_details').select('*').where({id: ed_id}).first()
}

async function insertEmployeeDetails(employee_details) {
    return await knex('employee_details').insert(employee_details)
}

async function updateEmployeeDetails(id, employee_details) {
    return await knex(employee_details).where({id: id}).update(employee_details)
}

async function deleteEmployeeDetails(id) {
    return await knex('employee_details').where({id: id}).del()
}

modules.export = {
    getAllEmployeeDetails,
    findEmployeeDetailsById,
    insertEmployeeDetails,
    updateEmployeeDetails,
    deleteEmployeeDetails
}
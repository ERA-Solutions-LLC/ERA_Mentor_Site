const knex =require('../data/dbConfig')

async function getAllCompanyUsers() {
    return await knex('company_user').select('*')
}

async function findCompanyUserById(id) {
    return await knex('company_user').select('*').where({company_user_id: id}).first()
}

async function insertCompanyUser(company_user) {
    return await knex('company_user').insert(company_user)
}

async function updateCompanyUser(id, company_user) {
    return await knex(company_user).where({id: id}).update(company_user)
}

async function deleteCompanyUser(id) {
    return await knex('company_user').where({id: id}).del()
}

module.export = {
    getAllCompanyUsers,
    findCompanyUserById,
    insertCompanyUser,
    updateCompanyUser,
    deleteCompanyUser
}
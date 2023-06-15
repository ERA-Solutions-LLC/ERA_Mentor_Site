const knex =require('../data/dbConfig')

async function getAllContactForm() {
    return await knex('contact_form').select('*')
}

async function findContactFormById(id) {
    return await knex('contact_form').select('*').where({id: client_id}).first()
}

async function insertContactForm(contact_form) {
    return await knex('contact_form').insert(contact_form)
}

async function updateContactForm(id, contact_form) {
    return await knex(contact_form).where({id: id}).update(contact_form)
}

async function deleteContactForm(id) {
    return await knex('contact_form').where({id: id}).del()
}

modules.export = {
    getAllContactForm,
    findContactFormById,
    insertContactForm,
    updateContactForm,
    deleteContactForm
}
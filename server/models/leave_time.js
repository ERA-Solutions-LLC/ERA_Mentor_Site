const knex = require('../data/dbConfig');

function getAllLeaveTime() {
  return knex('leave_time').select('*');
}

function findLeaveTimeById(id) {
  return knex('leave_time').select('*').where({ id }).first();
}

function insertLeaveTime(leave_time) {
  return knex('leave_time').insert(leave_time);
}

function updateLeaveTime(id, leave_time) {
  return knex('leave_time').where({ id }).update(leave_time);
}

function deleteLeaveTime(id) {
  return knex('leave_time').where({ id }).del();
}

module.exports = {
  getAllLeaveTime,
  findLeaveTimeById,
  insertLeaveTime,
  updateLeaveTime,
  deleteLeaveTime,
};


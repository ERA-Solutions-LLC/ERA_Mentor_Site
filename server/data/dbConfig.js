const knex = require("knex");

const config = require("../knexfile");

const dbEnv = process.env.DB_ENV || 'staging';

module.exports = knex(config[dbEnv]);
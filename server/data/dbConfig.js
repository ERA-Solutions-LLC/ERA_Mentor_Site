const knex = require('knex')
({client:'mysql'})

const config = require('../knexfile')

const dbEnv =  'development'

module.exports = knex(config, {dbEnv})
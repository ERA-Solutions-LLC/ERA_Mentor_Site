// Update with your config settings.

const { default: knex } = require("knex");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'knexuser',
      password: 'password',
      database: 'dberadev'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'ls-de27078989dc327f04b79b7a5a3f796184a8c6bf.cdkhikq7z23z.us-west-2.rds.amazonaws.com',
      port: 3306,
      user: '',
      password: '',
      database: ''
    },

    pool: {
      min: 2,
      max: 10,
    },

    migrations: {
      tableName: 'knex_migration'
    },

  },

  production: {
    client: 'mysql',
    connection: {
      host: 'ls-de27078989dc327f04b79b7a5a3f796184a8c6bf.cdkhikq7z23z.us-west-2.rds.amazonaws.com',
      port: 3306,
      user: '',
      password: '',
      database: ''
    },

    pool:{
      min: 2,
      max: 10,
    },

    migrations: {
    tableName: 'knex_migration'
    },

  }
};
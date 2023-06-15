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
      user: 'root',
      password: '',
      database: 'era_website_db'
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
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '',
      database: 'era_website_db'
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
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '',
      database: 'era_website_db'
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
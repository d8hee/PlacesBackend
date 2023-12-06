require('dotenv').config()

const { DEV_DATABASE_HOST, DEV_DATABASE_USERNAME, DEV_DATABASE_PASSWORD, PROD_DATABASE_USERNAME, PROD_DATABASE_PASSWORD, PROD_DATABASE_HOST } = process.env

module.exports = {
  development: {
    username: DEV_DATABASE_USERNAME,
    password: DEV_DATABASE_PASSWORD,
    database: "placesApp_development",
    host: DEV_DATABASE_HOST,
    dialect: "postgres"
  },
  production: {
    username: PROD_DATABASE_USERNAME,
    password: PROD_DATABASE_PASSWORD,
    database: "placesApp_development",
    host: PROD_DATABASE_HOST,
    dialect: "postgres"
  }
}
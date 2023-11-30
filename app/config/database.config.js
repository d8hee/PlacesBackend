require('dotenv').config()

const { DEV_DATABASE_HOST, DEV_DATABASE_USERNAME, DEV_DATABASE_PASSWORD } = process.env

module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "backend",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "DEV_DATABASE_USERNAME",
    "password": DEV_DATABASE_PASSWORD,
    "database": "database_test",
    "host": "DEV_DATABASE_HOST",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
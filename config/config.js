require('dotenv').config();

module.exports = {
  development: {
    username: "book",
    password: process.env.PGPASS,
    database: "color_ref",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "book",
    password: process.env.PGPASS,
    database: "color_ref",
    host: process.env.DATABASE_URL,
    dialect: "postgres"
  }
}

const { Sequelize } = require("sequelize");
const { database } = require("../config");
require("dotenv").config();
const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    dialect: "mysql",
  }
);

module.exports = sequelize;

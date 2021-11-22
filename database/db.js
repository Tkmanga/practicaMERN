const { Sequelize } = require("sequelize");
const { development } = require("../config");

const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    dialect: development.dialect,
  }
);

module.exports = sequelize;

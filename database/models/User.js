const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class User extends Model {}

User.init(
  {
    //config de la tabla
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    //Si es 0 es usuario comun y 1 es administradaor
    role: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "users",
  } //nombre de la tabla
);

module.exports = User;

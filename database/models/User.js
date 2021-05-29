const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class User extends Model {}

User.init(
  {
    //config de la tabla
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo no puede ser null",
        },
        len: {
          args: [3, 10],
          msg: "No puede haber menos de 3 caracteres y más de 10",
        },
        isAlpha: {
          args: true,
          msg: "el nombre solo puede contener letras",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    //Si es 0 es usuario comun y 1 es administradaor
    role: { type: DataTypes.INTEGER, defaultValue: 0 },
  },
  {
    sequelize,
    modelName: "user",
    timestamps: false,
  } //nombre de la tabla
);

module.exports = User;

/*
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Personaje extends Model {}

Personaje.init(
  {
    //Falta agregar img
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.FLOAT,
    historia: DataTypes.TEXT,
    //Pelicula o serie asociada se le agrega con el hasMany
  },
  {
    sequelize,
    modelName: "personaje",
    timestamps: false,
  }
);

module.exports = Personaje;
*/

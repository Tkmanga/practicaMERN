const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class PeliculaSerie extends Model {}

PeliculaSerie.init(
  {
    //Falta agregar img
    titulo: DataTypes.STRING,
    fechaDeCreacion: DataTypes.DATE,
    calificacion: {
      type: DataTypes.TINYINT,
      min: {
        args: 1,
        msg: "La cali tiene que ser mayor o igual a 1",
      },
      max: {
        args: 5,
        msg: "La cali tiene como maximo 5 incuido",
      },
    },
    //Personajes asociados se le agrega en el hasMany
  },
  {
    sequelize,
    modelName: "peliculaSerie",
    timestamps: false,
  }
);

module.exports = PeliculaSerie;

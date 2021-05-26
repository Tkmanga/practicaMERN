const Genero = require("./models/Genero");
const PeliculaSerie = require("./models/PeliculaSerie");
const Personaje = require("./models/Personaje");

//Probando
Genero.belongsToMany(PeliculaSerie, {
  through: "genero_peliculaSerie",
  timestamps: false,
});
PeliculaSerie.belongsToMany(Genero, { through: "genero_peliculaSerie" });

Personaje.belongsToMany(PeliculaSerie, {
  through: "personaje_peliculaSerie",
  timestamps: false,
});

PeliculaSerie.belongsToMany(Personaje, { through: "personaje_peliculaSerie" });

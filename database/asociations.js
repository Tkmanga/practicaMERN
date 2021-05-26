const Genero = require("./models/Genero");
const PeliculaSerie = require("./models/PeliculaSerie");
const Personaje = require("./models/Personaje");

//Probando
Genero.belongsToMany(Personaje, {
  through: "genero_personaje",
  timestamps: false,
});
Personaje.belongsToMany(Genero, { through: "genero_personaje" });

Personaje.belongsToMany(PeliculaSerie, {
  through: "personaje_peliculaSerie",
  timestamps: false,
});

PeliculaSerie.belongsToMany(Personaje, { through: "personaje_peliculaSerie" });

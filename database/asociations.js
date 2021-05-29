const Genero = require("./models/Genero");
const PeliculaSerie = require("./models/PeliculaSerie");
const Personaje = require("./models/Personaje");
//Uno a uno
//Usuario tiene una direccion
//Añade una clave foranea userID a la tabla addresses
//User.hasOne(Address, { as: "domicilio", foreignKey: "residente_id" });
//Añade una clave userId a la tabla User
//Address.belongsTo(User, { as: "residente", foreignKey: "residente_id" });

//Usuario va tener muchos post
//se añade una clave userId a la tabla post
//User.hasMany(Post, { as: "publicaciones", foreignKey: "autorId" });
//Post.belongsTo(User, { as: "autor" });

//NaN
//El usuario pertenece a varias bandas
//Esto crea una nueva tabla en la base de datos
//esto añade funciones user.addBands user.getBands
//User.belongsToMany(Band, { through: "user_band", timestamps: false });
//Band.belongsToMany(User, { through: "user_band" });

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

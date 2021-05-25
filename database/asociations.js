const User = require("./models/User");
const Address = require("./models/Address");
const Post = require("./models/Post");

//Uno a uno
//Usuario tiene una direccion
//Añade una clave foranea userID a la tabla addresses
//
User.hasOne(Address, { as: "domicilio", foreignKey: "residente_id" });
Address.belongsTo(User, { as: "residente", foreignKey: "residente_id" });

//Añade una clave userId a la tabla User
User.hasMany(Post, { as: "publicaciones", foreignKey: "autorId" });
Post.belongsTo(User, { as: "autor" });
//Usuario va tener muchos post
//se añade una clave userId a la tabla post
//
//se añade una clave userId a la tabla post
//

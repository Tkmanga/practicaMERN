const User = require("./models/User");
const Address = require("./models/Address");

//Uno a uno
//Usuario tiene una direccion
//Añade una clave foranea userID a la tabla addresses
User.hasOne(Address, { as: "domicilio", foreignKey: "domicilio_id" });
Address.belongsTo(User, { as: "residente", foreignKey: "residente_id" });
//Añade una clave userId a la tabla adresses

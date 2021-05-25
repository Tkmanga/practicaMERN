const sequelize = require("./database/db");
const User = require("./database/models/User");
const Address = require("./database/models/Address");
const Post = require("./database/models/Post");
require("./database/asociations");

//Usuarios

const users = [
  {
    name: "jose",
    email: "jose@jose.com",
    age: 20,
    role: 0,
  },
  {
    name: "pepe",
    email: "jose@jose.com",
    age: 20,
    role: 0,
  },
  {
    name: "joses",
    email: "jose@jose.com",
    age: 20,
    role: 0,
  },
  {
    name: "alfredo",
    email: "jose@jose.com",
    age: 20,
    role: 0,
  },
  {
    name: "papo",
    email: "jose@jose.com",
    age: 20,
    role: 0,
  },
  {
    name: "papu",
    email: "jose@jose.com",
    age: 20,
    role: 1,
  },
];

const addresses = [
  { street: "calle falsa 1", residente_id: 1 },
  { street: "calle falsa 12", residente_id: 2 },
  { street: "calle falsa 13", residente_id: 3 },
  { street: "calle falsa 14", residente_id: 4 },
  { street: "calle falsa 15", residente_id: 5 },
];

const posts = [
  { title: "foo1", body: "bar 1", autorId: 1 },
  { title: "foo2", body: "bar 12", autorId: 2 },
  { title: "foo3", body: "bar 13", autorId: 3 },
  { title: "foo4", body: "bar 14", autorId: 4 },
  { title: "foo5", body: "bar 15", autorId: 5 },
  { title: "foo6", body: "bar 16", autorId: 6 },
  { title: "foo7", body: "bar 17", autorId: 1 },
  { title: "foo8", body: "bar 18", autorId: 1 },
];
/*


*/

sequelize
  .sync({ force: true })
  .then(() => {
    //conexion establecida
    console.log("conexion establecida");
  })
  .then(() => {
    //rellenar usuarios
    users.forEach((user) => User.create(user));
  })
  .then(() => {
    posts.forEach((post) => Post.create(post));
  });

/*
  ;


    
 .then(() => {
    addresses.forEach((address) => Address.create(address));
  });
*/

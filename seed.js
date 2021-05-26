const sequelize = require("./database/db");
const User = require("./database/models/User");
const Address = require("./database/models/Address");
const Post = require("./database/models/Post");
const Band = require("./database/models/Band");

const Genero = require("./database/models/Genero");
const PeliculaSerie = require("./database/models/PeliculaSerie");
const Personaje = require("./database/models/Personaje");
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
  .then(async () => {
    let PeliculaSerie1 = await PeliculaSerie.create(
      {
        titulo: "volver al futuro 1",
        fechaDeCreacion: "2002-12-31",
        calificacion: 5,
        personajes: [
          {
            nombre: "martin",
            edad: 18,
            peso: 18,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
          {
            nombre: "doc",
            edad: 19,
            peso: 40,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
          {
            nombre: "einstain",
            edad: 19,
            peso: 40,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
        ],
      },
      {
        include: "personajes",
      }
    );
    let PeliculaSerie2 = await PeliculaSerie.create(
      {
        titulo: "volver al futuro 2",
        fechaDeCreacion: "2004-12-31",
        calificacion: 4,
        personajes: [
          {
            nombre: "martin",
            edad: 18,
            peso: 18,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
          {
            nombre: "doctor",
            edad: 19,
            peso: 40,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
          {
            nombre: "ainstain",
            edad: 19,
            peso: 40,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
        ],
      },
      {
        include: "personajes",
      }
    );
    let PeliculaSerie3 = await PeliculaSerie.create(
      {
        titulo: "volver al futuro 3",
        fechaDeCreacion: "2006-12-31",
        calificacion: 5,
        personajes: [
          {
            nombre: "martin",
            edad: 18,
            peso: 18,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
          {
            nombre: "doctor",
            edad: 19,
            peso: 40,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
          {
            nombre: "ainstain",
            edad: 19,
            peso: 40,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
        ],
      },
      {
        include: "personajes",
      }
    );
  })

  .then(async () => {
    let Genero1 = await Genero.create(
      {
        nombre: "terror",
        personajes: [
          {
            nombre: "lucia",
            edad: 18,
            peso: 18,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
          {
            nombre: "pepeto",
            edad: 19,
            peso: 40,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
          {
            nombre: "pepeto",
            edad: 19,
            peso: 40,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
        ],
      },
      {
        include: "personajes",
      }
    );
    let Genero2 = await Genero.create(
      {
        nombre: "comedia",
        personajes: [
          {
            nombre: "lucia",
            edad: 18,
            peso: 18,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
          {
            nombre: "pepeto",
            edad: 19,
            peso: 40,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
          {
            nombre: "pepeto",
            edad: 19,
            peso: 40,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
        ],
      },
      {
        include: "personajes",
      }
    );
    let Genero3 = await Genero.create(
      {
        nombre: "drama",
        personajes: [
          {
            nombre: "lucia",
            edad: 18,
            peso: 18,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
          {
            nombre: "pepeto",
            edad: 19,
            peso: 40,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
          {
            nombre: "pepeto",
            edad: 19,
            peso: 40,
            historia:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus mauris sit amet justo sodales iaculis. Nullam vel molestie diam, id semper magna. Curabitur ac euismod turpis. Curabitur vitae nibh nec nulla condimentum accumsan eu quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam est augue, condimentum vitae orci vitae, rutrum rutrum mauris.",
          },
        ],
      },
      {
        include: "personajes",
      }
    );
  });
/*
  ;

  .then(() => {
    posts.forEach((post) => Post.create(post));
  });
    
 .then(() => {
    addresses.forEach((address) => Address.create(address));
  });


  .then(async () => {
    let band1 = await band.create(
      {
        name: "patricios rey",
        type: "rock",
        users: [
          { name: "lucia", age: 18, email: "lucia@lu.com" },
          { name: "beto", age: 18, email: "beto@beto.com" },
        ],
      },
      {
        include: "users",
      }
    );
    let band2 = await Band.create(
      {
        name: "y sus redonditos",
        type: "pesado",
        users: [
          { name: "pepe", age: 18, email: "pepe@lu.com" },
          { name: "tito", age: 18, email: "tito@beto.com" },
        ],
      },
      {
        include: "users",
      }
    );
    let band3 = await Band.create(
      {
        name: "de ricota",
        type: "rock2",
        users: [
          { name: "capo", age: 18, email: "capo@lu.com" },
          { name: "eira", age: 18, email: "eira@beto.com" },
        ],
      },
      {
        include: "users",
      }
    );
  })
*/

/*

*/

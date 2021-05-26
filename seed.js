const sequelize = require("./database/db");

const Genero = require("./database/models/Genero");
const PeliculaSerie = require("./database/models/PeliculaSerie");
const Personaje = require("./database/models/Personaje");

require("./database/asociations");

sequelize
  .sync({ force: true })
  .then(() => {
    //conexion establecida
    console.log("conexion establecida");
  })
  .then(async () => {
    //Creamos Peliculaserie-personajes
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
    //creamos genero peliculaSerie
    let Genero1 = await Genero.create(
      {
        nombre: "terror",
        peliculaSeries: {
          titulo: "lucia 1",
          fechaDeCreacion: "2004-12-31",
          calificacion: 1,
        },
      },
      {
        include: "peliculaSeries",
      }
    );

    let Genero2 = await Genero.create(
      {
        nombre: "comedia",
        peliculaSeries: {
          titulo: "pepe 1",
          fechaDeCreacion: "2004-12-31",
          calificacion: 4,
        },
      },
      {
        include: "peliculaSeries",
      }
    );
    let Genero3 = await Genero.create(
      {
        nombre: "fantasia",
        peliculaSeries: {
          titulo: "jose 3",
          fechaDeCreacion: "2004-12-31",
          calificacion: 5,
        },
      },
      {
        include: "peliculaSeries",
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

const sequelize = require("./database/db");

const Genero = require("./database/models/Genero");
const PeliculaSerie = require("./database/models/PeliculaSerie");
require("./database/asociations");

sequelize
  .sync({ force: true })
  .then(() => {
    //conexion establecida
    console.log("conexion establecida");
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

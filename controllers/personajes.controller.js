'use strict'

const Personaje = require("../database/models/Personaje");

var controller = {
    create: (req, res) => {
        Personaje.create(
          {
            nombre: req.body.nombre,
            edad: req.body.edad,
            peso: req.body.peso,
            historia: req.body.historia,
            peliculaSeries: {
              titulo: req.body.titulo,
              fechaDeCreacion: req.body.fechaDeCreacion,
              calificacion: req.body.calificacion,
              historia: req.body.historia,
            },
          },
          {
            include: "peliculaSeries",
          }
        )
          .then((result) => {
            res.json(result);
          })
          .catch((error) => {
            res.json(error);
          });
      },
      read: (req, res) => {
        Personaje.findByPk(req.params.id).then((personaje) => {
          personaje.getPeliculaSeries().then((peliculaSeries) => {
            res.json({ personaje, peliculaSeries });
          });
        });
      },
    update: (req, res) => {
        Personaje.update(
          {
            nombre: req.body.nombre,
            edad: req.body.edad,
            peso: req.body.peso,
            historia: req.body.historia,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        ).then((result) => {
          res.json(result);
        });
      },
      delete: (req, res) => {
        Personaje.destroy({
          where: {
            id: req.params.id,
          },
        }).then((result) => {
          res.json(result);
        });
      },
      all: (req, res) => {
        Personaje.findAll({
          attributes: ["nombre"],
        }).then((Personajes) => {
          res.json(Personajes);
        });
      }
}

module.exports = controller; 
const express = require("express");
const router = express.Router();
const PeliculaSerie = require("../database/models/PeliculaSerie");

router.post("/", (req, res) => {
  PeliculaSerie.create({
    titulo: req.body.titulo,
    fechaDeCreacion: req.body.fechaDeCreacion,
    calificacion: req.body.calificacion,
    historia: req.body.historia,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/", (req, res) => {
  PeliculaSerie.findAll({
    attributes: ["titulo", "fechaDeCreacion"],
  }).then((PeliculaSerie) => {
    res.json(PeliculaSerie);
  });
});
module.exports = router;

// ver la direccion de usuario /api/Personajes/:id/domicilio
/*
router.get("/:id/domicilio", (req, res) => {
  Personaje.findByPk(req.params.id).then((Personaje) => {
    Personaje.getDomicilio().then((domicilio) => {
      res.json(domicilio);
    });
  });
});
//ver las publicaciones de un usuario
router.get("/:id/publicaciones", (req, res) => {
  Personaje.findByPk(req.params.id).then((Personaje) => {
    Personaje.getPublicaciones().then((publicacion) => {
      res.json(publicacion);
    });
  });
});
//ver las bandas de un usuario
router.get("/:id/bandas", (req, res) => {
  Personaje.findByPk(req.params.id).then((Personaje) => {
    Personaje.getBands({ attributes: ["name", "type"] }).then((bands) => {
      res.json(bands);
    });
  });
});

*/

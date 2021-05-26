const express = require("express");
const router = express.Router();
const Personaje = require("../database/models/Personaje");

router.post("/", (req, res) => {
  Personaje.create({
    nombre: req.body.nombre,
    edad: req.body.edad,
    peso: req.body.peso,
    historia: req.body.historia,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});
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

router.get("/", (req, res) => {
  Personaje.findAll({
    attributes: ["nombre"],
  }).then((Personajes) => {
    res.json(Personajes);
  });
});
module.exports = router;

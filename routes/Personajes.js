const express = require("express");
const router = express.Router();
const Personaje = require("../database/models/Personaje");
const auth = require("../middlewares/auth");
//CREATE whitout character ?
router.post("/", auth, (req, res) => {
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
});
//READ
router.get("/:id", auth, (req, res) => {
  Personaje.findByPk(req.params.id).then((personaje) => {
    personaje.getPeliculaSeries().then((peliculaSeries) => {
      res.json({ personaje, peliculaSeries });
    });
  });
});

//UPDATE
router.patch("/:id", auth, (req, res) => {
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
});

//DELETE

router.delete("/:id", auth, (req, res) => {
  Personaje.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  });
});

router.get("/", auth, (req, res) => {
  Personaje.findAll({
    attributes: ["nombre"],
  }).then((Personajes) => {
    res.json(Personajes);
  });
});
module.exports = router;

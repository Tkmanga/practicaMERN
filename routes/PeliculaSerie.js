const express = require("express");
const router = express.Router();
const PeliculaSerie = require("../database/models/PeliculaSerie");
const auth = require("../middlewares/auth");
router.get("/", auth, (req, res) => {
  PeliculaSerie.findAll({
    attributes: ["titulo", "fechaDeCreacion"],
  }).then((PeliculaSerie) => {
    res.json(PeliculaSerie);
  });
});

//CREATE whitout character ?
router.post("/", auth, (req, res) => {
  PeliculaSerie.create(
    {
      titulo: req.body.titulo,
      fechaDeCreacion: req.body.fechaDeCreacion,
      calificacion: req.body.calificacion,
      personajes: {
        nombre: req.body.nombre,
        edad: req.body.edad,
        peso: req.body.peso,
        historia: req.body.historia,
      },
    },
    {
      include: "personajes",
    }
  )
    .then((peliculaSerie) => {
      res.json(peliculaSerie);
    })
    .catch((error) => {
      res.json(error);
    });
});

//READ
router.get("/:id", auth, (req, res) => {
  PeliculaSerie.findByPk(req.params.id).then((peliSerie) => {
    peliSerie.getPersonajes().then((personajes) => {
      res.json({ peliSerie, personajes });
    });
  });
});

//UPDATE
router.patch("/:id", auth, (req, res) => {
  PeliculaSerie.update(
    {
      titulo: req.body.titulo,
      fechaDeCreacion: req.body.fechaDeCreacion,
      calificacion: req.body.calificacion,
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
  PeliculaSerie.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  });
});

module.exports = router;

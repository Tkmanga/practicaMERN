const express = require("express");
const router = express.Router();
const Genero = require("../database/models/Genero");
const auth = require("../middlewares/auth");

//CREATE whitout character ?
router.post("/", auth, (req, res) => {
  Genero.create(
    {
      nombre: req.body.nombre,
      peliculaSeries: {
        titulo: req.body.titulo,
        fechaDeCreacion: req.body.fechaDeCreacion,
        calificacion: req.body.calificacion,
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
  Genero.findByPk(req.params.id).then((post) => {
    res.json(post);
  });
});

//UPDATE
router.patch("/:id", auth, (req, res) => {
  Genero.update(
    {
      nombre: req.body.nombre,
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
  Genero.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  });
});

router.get("/", auth, (req, res) => {
  Genero.findAll({
    attributes: ["nombre"],
  }).then((resul) => {
    res.json(resul);
  });
});
module.exports = router;

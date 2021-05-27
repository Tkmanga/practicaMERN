const express = require("express");
const router = express.Router();
const Personaje = require("../database/models/Personaje");
//CREATE whitout character ?
router.post("/", (req, res) => {
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
router.get("/:id", (req, res) => {
  Personaje.findByPk(req.params.id).then((personaje) => {
    personaje
      .getPeliculaSeries({ attributes: ["titulo"] })
      .then((peliculaSeries) => {
        res.json({ personaje, peliculaSeries });
      });
  });
});

//UPDATE
router.patch("/:id", (req, res) => {
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
  )
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

//DELETE

router.delete("/:id", (req, res) => {
  Personaje.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  });
});

router.get("/", (req, res) => {
  Personaje.findAll({
    attributes: ["nombre"],
    //aca deberia traer la img
  }).then((Personajes) => {
    res.json(Personajes);
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

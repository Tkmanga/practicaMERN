const express = require("express");
const router = express.Router();
const Personaje = require("../database/models/Personaje");
const Pelicula = require("../database/models/PeliculaSerie");
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
/*
router.post("/", (req, res) => {
  PeliculaSerie.create({
    titulo: req.body.titulo,
    fechaDeCreacion: req.body.fechaDeCreacion,
    calificacion: req.body.calificacion,
    historia: req.body.historia,
  })
    .then((peliculaSerie) => {
      res.json(peliculaSerie);
    })
    .catch((error) => {
      res.json(error);
    });
});
*/
//READ
router.get("/:id", (req, res) => {
  PeliculaSerie.findByPk(req.params.id).then((post) => {
    res.json(post);
  });
});

//UPDATE
router.patch("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
  PeliculaSerie.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
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

const express = require("express");
const router = express.Router();
const Genero = require("../database/models/Genero");
//CREATE whitout character ?
router.post("/", (req, res) => {
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
/*
router.post("/", (req, res) => {
  Genero.create({
    nombre: req.body.nombre,
  })
    .then((Genero) => {
      res.json(Genero);
    })
    .catch((error) => {
      res.json(error);
    });
});
*/
//READ
router.get("/:id", (req, res) => {
  Genero.findByPk(req.params.id).then((post) => {
    res.json(post);
  });
});

//UPDATE
router.patch("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
  Genero.destroy({
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
  Genero.findAll({
    attributes: ["nombre"],
  }).then((resul) => {
    res.json(resul);
  });
});
module.exports = router;

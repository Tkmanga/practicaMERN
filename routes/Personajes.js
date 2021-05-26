const express = require("express");
const Address = require("../database/models/Address");
const Post = require("../database/models/Post");
const router = express.Router();
const User = require("../database/models/User");

router.post("/", (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});
// ver la direccion de usuario /api/users/:id/domicilio
router.get("/:id/domicilio", (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    user.getDomicilio().then((domicilio) => {
      res.json(domicilio);
    });
  });
});
//ver las publicaciones de un usuario
router.get("/:id/publicaciones", (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    user.getPublicaciones().then((publicacion) => {
      res.json(publicacion);
    });
  });
});
//ver las bandas de un usuario
router.get("/:id/bandas", (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    user.getBands({ attributes: ["name", "type"] }).then((bands) => {
      res.json(bands);
    });
  });
});

router.get("/", (req, res) => {
  User.findAll({
    include: [
      {
        model: Address,
        as: "domicilio",
        attributes: ["street"],
      },
      {
        model: Post,
        as: "publicaciones",
        attributes: ["body"],
      },
    ],
    attributes: ["name", "age"],
  }).then((users) => {
    res.json(users);
  });
});
module.exports = router;

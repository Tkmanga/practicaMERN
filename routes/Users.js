const express = require("express");
const router = express.Router();
const User = require("../database/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.post("/signup", (req, res) => {
  let password = bcrypt.hashSync(req.body.password, 10);
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: password,
  })
    .then((user) => {
      //creamos el tkon

      let token = jwt.sign({ user: user }, "wololo", {
        expiresIn: "1d",
      });
      console.log(token);
      res.json({
        user: user,
        token: token,
      });
    })
    .catch((error) => {
      res.json(error);
    });
});
/*
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
*/
router.get("/signin", (req, res) => {
  let { email, password } = req.body;
  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (!user) {
        res.status(404).json({ msg: "datos incorrectos?" });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          let token = jwt.sign({ user: user }, "wololo", {
            expiresIn: "1d",
          });
          res.json({
            user: user,
            token: token,
          });
        } else {
          res.status(401).json({ msg: "datos incorrectos? " });
        }
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});
module.exports = router;

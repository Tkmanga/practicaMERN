const express = require("express");
const Address = require("../database/models/Address");
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

router.get("/", (req, res) => {
  User.findAll({
    include: {
      model: Address,
      as: "domicilio",
      attributes: ["street"],
    },
    attributes: ["name", "age"],
  }).then((users) => {
    res.json(users);
  });
});
module.exports = router;

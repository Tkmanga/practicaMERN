const express = require("express");
const router = express.Router();
const User = require("../database/models/User");

router.post("/", (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  }).then((result) => {
    res.json(result);
  });
});

module.exports = router;

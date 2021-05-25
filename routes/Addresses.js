const express = require("express");
const Address = require("../database/models/Address");
const router = express.Router();
const User = require("../database/models/User");

router.get("/", (req, res) => {
  Address.findAll({
    attributes: ["street"],
    include: {
      model: User,
      as: "residente",
      attributes: ["name", "age"],
    },
  }).then((addresses) => {
    res.json(addresses);
  });
});
module.exports = router;

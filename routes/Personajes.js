const express = require("express");
const router = express.Router();
const Personaje = require("../database/models/Personaje");
const PersonajeController = require("../controllers/Personajes");
const auth = require("../middlewares/auth");

//CREATE whitout character ?
router.post("/", auth, PersonajeController.create);

//READ
router.get("/:id", auth,PersonajeController.read);

//UPDATE
router.patch("/:id", auth, PersonajeController.update);

//DELETE
router.delete("/:id", auth, PersonajeController.delete);

//get all 
router.get("/", auth, PersonajeController.all);

module.exports = router;

const express = require("express");
var GeneroController = require("../controllers/Genero");
const router = express.Router();
const auth = require("../middlewares/auth");

//test de controlador tabla
router.get('/test-de-controlador',GeneroController.test); 

//CREATE whitout character ?
router.post("/", auth, GeneroController.create);

//READ
router.get("/:id", auth,GeneroController.findById);

//UPDATE
router.patch("/:id", auth, GeneroController.update);

//DELETE
router.delete("/:id", auth, GeneroController.delete);

// ALL
router.get("/", auth, GeneroController.all);

module.exports = router;

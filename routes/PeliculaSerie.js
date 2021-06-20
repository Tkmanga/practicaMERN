const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const PeliculaSerieController = require("../controllers/PeliculaSerie"); 
// ALL
router.get("/", auth, PeliculaSerieController.all);

//CREATE whitout character ?
router.post("/", auth, PeliculaSerieController.create);

//READ
router.get("/:id", auth, PeliculaSerieController.read);

//UPDATE
router.patch("/:id", auth,PeliculaSerieController.update);

//DELETE
router.delete("/:id", auth, PeliculaSerieController.delete);

module.exports = router;

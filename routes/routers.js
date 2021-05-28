const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
//home 2
router.get("/", (req, res) => res.json({ hello: "world" }));

//dos rutas login y registro
// /api/singin & /api/singup
router.post("/signin", AuthController.signIn);
router.post("/signup", AuthController.signUp);
module.exports = router;

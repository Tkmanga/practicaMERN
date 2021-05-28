const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const PostControllers = require("../controllers/PostControllers");
//home 2
router.get("/", (req, res) => res.json({ hello: "world" }));

//dos rutas login y registro
// /api/singin & /api/singup
router.post("/signin", AuthController.signIn);
router.post("/signup", AuthController.signUp);

//routas post

router.get("/posts", PostControllers.index);
module.exports = router;

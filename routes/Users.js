const express = require("express");
const router = express.Router();
const UserController = require('../controllers/users.controller');

router.post("/register", UserController.register);

router.get("/login", UserController.login);

module.exports = router;

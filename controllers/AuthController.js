const { User } = require("../database/models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = {
  signIn(req, res) {},
  signUp(req, res) {
    //encriptamos contraseña
    let password = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds)
    ); //
    //crear un usuario
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: password,
    })
      .then((user) => {
        //creamos el tkon
        let token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });
        //lo devolvemos
        res.json({
          user: user,
          token: token,
        });
      })
      .catch((error) => {
        res.status(500).json(err);
      });
  },
};

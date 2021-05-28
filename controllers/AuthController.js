const { userr } = require("../database/models/index");
console.log(userr);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = {
  signIn(req, res) {
    let { email, password } = req.body;
    userr
      .findOne({
        where: {
          email: email,
        },
      })
      .then((user) => {
        if (!user) {
          res.status(404).json({ msg: "datos incorrectos" });
        } else {
          if (bcrypt.compareSync(password, user.password)) {
            //devolvemos token
            //creamos el tkon
            let token = jwt.sign({ user: user }, authConfig.secret, {
              expiresIn: authConfig.expires,
            });
            res.json({
              user: user,
              token: token,
            });
          } else {
            res.status(401).json({ msg: "datos otra vez incorrectos" });
          }
        }
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },
  signUp(req, res) {
    //encriptamos contraseña
    let password = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds)
    ); //
    //crear un usuario
    userr
      .create({
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
        res.status(500).json(error);
      });
  },
};

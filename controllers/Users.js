'use strict'
const User = require("../database/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sendEmail = require("../utils/sendEmail"); 
var controller = {
    register: (req, res) => {
        const from = "tacachojose@gmail.com"
        const to = req.body.email 
        const subject = "Bienvenide a nuestra Api!"
        const text = "Bienvenide a nuestra Basic API !"
        let password = bcrypt.hashSync(req.body.password, 10);
        User.create({
        name: req.body.name,
        email: req.body.email,
        password: password,
        })
        .then((user) => {
            //creamos el tkon
            let token = jwt.sign({ user: user }, "wololo", {
            expiresIn: "1d",
            });
            sendEmail(to,from,subject,text)
            res.json({  
              user: user,
              token: token,
            });
          })
          .catch((error) => {
            res.json(error);
          });
      },
      login: (req, res) => {
        let { email, password } = req.body;
        User.findOne({
          where: {
            email: email,
          },
        })
          .then((user) => {
            if (!user) {
              res.status(404).json({ msg: "datos incorrectos?" });
            } else {
              if (bcrypt.compareSync(password, user.password)) {
                let token = jwt.sign({ user: user }, "wololo", {
                  expiresIn: "1d",
                });
                res.json({
                  user: user,
                  token: token,
                });
              } else {
                res.status(401).json({ msg: "datos incorrectos? " });
              }
            }
          })
          .catch((error) => {
            res.status(500).json(error);
          });
      }
}

module.exports = controller; 
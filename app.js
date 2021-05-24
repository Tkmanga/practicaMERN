const express = require("express");
const app = express();
const sequelize = require("./database/db");
const User = require("./database/models/User");
//Configuracion
const port = process.env.PORT || 3000;
//Routes
app.get("/", (req, res) => {
  User.create({
    name: "jose",
    birthday: new Date(1999, 4, 6),
  }).then((User) => {
    res.json(User);
  });

  User.findAll().then((users) => {
    res.json(users);
  });
});
//Start
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  //db
  //force true: drop tables
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("nos conectamos");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });
});

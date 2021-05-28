const express = require("express");
const app = express();
const sequelize = require("./database/db");
require("./database/asociations");

//Configuracion
const port = process.env.PORT || 3000;
//Routes

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// para poder rellenar el req.body

app.use("/api/posts", require("./routes/Posts"));
app.use("/api/users", require("./routes/Users"));
app.use("/api/adresses", require("./routes/Addresses"));
app.use("/api/posts", require("./routes/Posts"));
app.use("/api/posts", require("./routes/Posts"));
app.use("/api/characters", require("./routes/Personajes"));
app.use("/api/movies", require("./routes/PeliculaSerie"));
app.use("/api/genders", require("./routes/Genero"));
/* 
app.get("/", (req, res) => {
  res.json("hola mundo");
  
  User.create({
    name: "jose",
    birthday: new Date(1999, 4, 6),
  }).then((User) => {
    res.json(User);
  });

  
});
*/

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

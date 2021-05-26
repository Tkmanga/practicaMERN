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

app.use("/api/characters", require("./routes/Personajes"));
app.use("/api/movies", require("./routes/PeliculaSerie"));
app.use("/api/genders", require("./routes/Genero"));

//Start

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  //db
  //force true: drop tables
  sequelize
    .sync({ force: true })
    .then(() => {
      console.log("nos conectamos");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });
});

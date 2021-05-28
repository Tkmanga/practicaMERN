const express = require("express");
const app = express();
//const sequelize = require("./database/db");
//require("./database/asociations");
const { sequelize } = require("./database/models/index");
//Configuracion
const port = process.env.PORT || 3000;

// Middleware basicos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//opcion ?
app.use("/api", require("./routes/routers"));
//Routes
/*
app.use("/api/characters", require("./routes/Personajes"));
app.use("/api/movies", require("./routes/PeliculaSerie"));
app.use("/api/genders", require("./routes/Genero"));
*/
//Start

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  sequelize.authenticate().then(() => {
    console.log("nos hemos conecatdo a la base de datos AUHT");
  });
  //force true: drop tables
  /*
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("nos conectamos a la base de datos API");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });
    */
});

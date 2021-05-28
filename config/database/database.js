require("dotenv").config();

module.exports = {
  //configuracion db2 ?
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || null,
  database: process.env.DATABASE || "auth",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: process.env.DB_DIALECT || "mysql",

  //configuramos para el sequelize cli tanto seeders y migraciones
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  //configuracion de migrations
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
};

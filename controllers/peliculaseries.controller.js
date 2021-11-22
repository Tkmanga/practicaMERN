'use strict'


const PeliculaSerie = require("../database/models/PeliculaSerie");

var controller ={
    all: (req, res) => {
        PeliculaSerie.findAll({
        attributes: ["titulo", "fechaDeCreacion"],
        }).then((PeliculaSerie) => {
        res.json(PeliculaSerie);
        });
    },
    create: (req, res) => {
        PeliculaSerie.create(
        {
            titulo: req.body.titulo,
            fechaDeCreacion: req.body.fechaDeCreacion,
            calificacion: req.body.calificacion,
            personajes: {
            nombre: req.body.nombre,
            edad: req.body.edad,
            peso: req.body.peso,
            historia: req.body.historia,
            },
        },
        {
            include: "personajes",
        }
        )
        .then((peliculaSerie) => {
            res.json(peliculaSerie);
        })
        .catch((error) => {
            res.json(error);
        });
    },
    delete: (req, res) => {
        PeliculaSerie.destroy({
        where: {
            id: req.params.id,
        },
        }).then((result) => {
        res.json(result);
        });
    },
    update:  (req, res) => {
        PeliculaSerie.update(
        {
            titulo: req.body.titulo,
            fechaDeCreacion: req.body.fechaDeCreacion,
            calificacion: req.body.calificacion,
            historia: req.body.historia,
        },
        {
            where: {
            id: req.params.id,
            },
        }
        ).then((result) => {
        res.json(result);
        });
    },
    read: (req, res) => {
        PeliculaSerie.findByPk(req.params.id).then((peliSerie) => {
        peliSerie.getPersonajes().then((personajes) => {
            res.json({ peliSerie, personajes });
        });
        });
    }
}

module.exports = controller; 
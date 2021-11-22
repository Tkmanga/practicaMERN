'use strict'

const Genero = require("../database/models/Genero");
var controller = {
    all: (req, res) => {
        Genero.findAll({
        attributes: ["nombre"],
        }).then((resul) => {
        res.json(resul);
        });
    },
    create : (req, res) => {
        Genero.create(
        {
            nombre: req.body.nombre,
            peliculaSeries: {
            titulo: req.body.titulo,
            fechaDeCreacion: req.body.fechaDeCreacion,
            calificacion: req.body.calificacion,
            },
        },
        {
            include: "peliculaSeries",
        }
        )
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
    },
    findById: (req, res) => {
        Genero.findByPk(req.params.id).then((post) => {
        res.json(post);
        });
    },
    findByName: (req,res)=>{
        Genero.findOne({where: {nombre: req.params.nombre}}).then((result) => {
            res.json(result);
        })
    },
    update: (req, res) => {
        Genero.update(
        {
            nombre: req.body.nombre,
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
    delete: (req, res) => {
        Genero.destroy({
        where: {
            id: req.params.id,
        },
        }).then((result) => {
        res.json(result);
        });
    },
    test: (req,res) => {
        return res.status(200).send({
            message: 'soy la accion test de mi controlador de genero'
        })
    }    
}

module.exports = controller; 
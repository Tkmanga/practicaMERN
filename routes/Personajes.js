const express = require("express");
const router = express.Router();
const Personaje = require("../database/models/Personaje");
const PersonajeController = require("../controllers/Personajes");
const auth = require("../middlewares/auth");

//CREATE whitout character ?
/** 
 * @swagger
 * components:
 *   schemas:
 *     Personaje:
 *       type: object
 *       required:
 *         - nombre
 *         - edad
 *         - peso
 *         - historia 
 *         - peliculaSeries 
 *       properties:
 *         id:
 *           type: string
 *           description: El id de la PeliculaSerie que se genera automaticamente
 *         nombre:
 *           type: string
 *           description: Titulo de la PeliculaSerie 
 *         edad:
 *           type: int
 *           description: Fecha de creacion de la PeliculaSerie 
 *         peso: 
 *          type: float 
 *          description: Calificacion de la PeliculaSerie del 1 al 5
 *         historia: 
 *          type: text
 *          description: Historia del personaje 
 *         peliculaSeries: 
 *          type: PeliculaSerie
 *          description: Las Peliculas/Series donde sale el personaje 
 *       example:
 *         id: 1
 *         nombre: Clint Eastwood
 *         edad: 50
 *         peso: 60
 *         historia: en el lejano oeste habia un vaquero 
 *         peliculaSeries: la pistola mas rapida
 */
/** 
 * @swagger
 *  tags:    
 *      name: Personaje 
 *      description: El API de Personaje 
*/
/**
 * @swagger 
 * /api/characters/:
 *  post: 
 *    tags: [Personaje]    
 *    description: solo para probar el controlador 
 *    responses: 
 *      '200':
 *        description: ''
*/
router.post("/", auth, PersonajeController.create);

//READ
/**
 * @swagger 
 * /api/characters/:id:
 *  get: 
 *    tags: [Personaje]    
 *    description: solo para probar el controlador 
 *    responses: 
 *      '200':
 *        description: 'solo probando...'
*/
router.get("/:id", auth,PersonajeController.read);

//UPDATE
/**
 * @swagger 
 * /api/characters/:id:
 *  patch: 
 *    tags: [Personaje]    
 *    description: solo para probar el controlador 
 *    responses: 
 *      '200':
 *        description: 'solo probando...'
*/
router.patch("/:id", auth, PersonajeController.update);

//DELETE
/**
 * @swagger 
 * /api/characters/:id:
 *  delete: 
 *    tags: [Personaje]    
 *    description: solo para probar el controlador 
 *    responses: 
 *      '200':
 *        description: 'solo probando...'
*/
router.delete("/:id", auth, PersonajeController.delete);

//get all 
/**
 * @swagger 
 * /api/characters/:
 *  get: 
 *    tags: [Personaje]    
 *    description: solo para probar el controlador 
 *    responses: 
 *      '200':
 *        description: 'solo probando...'
*/
router.get("/", auth, PersonajeController.all);

module.exports = router;

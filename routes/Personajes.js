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

//get all 
/**
 * @swagger 
 * /api/characters/:
 *  get: 
 *    tags: [Personaje]  
 *    summary: Traer todos los Personajes 
 *    description: Traer todos los Personajes 
 *    responses: 
 *      '200':
 *        description: 'Todos los Generos en la api son...'
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Personaje'
 *      '401':
 *        description: 'Acceso no autorizado'
 *      '404':
 *        description: 'No se encontro ningun Personaje' 
*/
router.get("/", auth, PersonajeController.all);
/**
 * @swagger 
 * /api/characters/:
 *  post: 
 *    tags: [Personaje]    
 *    summary: Crear el Personaje #id
 *    description: Crear el Personaje #id
 *    requestBody: 
 *      required: true 
 *      content: 
 *        application/json: 
 *          schema: 
 *            $ref: '#/components/schemas/Personaje' 
 *    responses: 
 *      '200':
 *        description: 'El Personaje se creo'
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Personaje' 
 *      '401':
 *        description: 'Acceso no autorizado'
 *      '404':
 *        description: 'Error no se pudo crear'
*/
router.post("/", auth, PersonajeController.create);

//READ
/**
 * @swagger 
 * /api/characters/{id}:
 *  get: 
 *    tags: [Personaje]    
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Personaje #id
 *    summary: Traer el Personaje #id
 *    description: Traer el Personaje #id 
 *    responses: 
 *      '200':
 *        description: 'El Personaje solicitado es...'
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Personaje'
 *      '401':
 *        description: 'Acceso no autorizado'
 *      '404':
 *        description: 'No se encontro el genero'
*/
router.get("/:id", auth,PersonajeController.read);

//UPDATE
/**
 * @swagger 
 * /api/characters/{id}:
 *  patch: 
 *    summary: Actualizar el Personaje #id
 *    description: Actualizar el Personaje en la bd 
 *    tags: [Personaje]        
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Personaje #id 
 *    requestBody: 
 *      required: true 
 *      content: 
 *        application/json: 
 *          schema: 
 *            $ref: '#/components/schemas/Personaje'  
 *    responses: 
 *      '200':
 *        description: 'Para actualizar la id'
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Personaje'
 *      '401':
 *        description: 'Acceso no autorizado'
 *      '404':
 *        description: 'No se encontro el genero'
*/
router.patch("/:id", auth, PersonajeController.update);

//DELETE
/**
 * @swagger 
 * /api/characters/{id}:
 *  delete: 
 *    summary: Eliminar el Personaje #id 
 *    description: Eliminar el Personaje segun el id 
 *    tags: [Personaje]    
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Si el ID existe se elimina de la bd 
 *    responses: 
 *      '200':
 *        description: 'El Personaje se elimino'
 *      '401':
 *        description: 'Acceso no autorizado'
 *      '404':
 *        description: 'Error'
*/
router.delete("/:id", auth, PersonajeController.delete);



module.exports = router;

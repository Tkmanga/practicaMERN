const express = require("express");
var GeneroController = require("../controllers/generos.controller");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", auth, GeneroController.all);
router.post("/", auth, GeneroController.create);
router.get("/:id", auth,GeneroController.findById);
router.get("/:nombre", auth,GeneroController.findByName);
router.patch("/:id", auth, GeneroController.update);
router.delete("/:id", auth, GeneroController.delete);


module.exports = router;

//test de controlador tabla
//router.get('/test-de-controlador',GeneroController.test); 

/** 
 * @swagger
 * components:
 *   schemas:
 *     Genero:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         id:
 *           type: string
 *           description: El id del genero que se genera automaticamente
 *         nombre:
 *           type: string
 *           description: Nombre del genero 
 *       example:
 *          id: 1
 *          nombre: Terror
 */
/** 
 * @swagger
 *  tags:    
 *      name: Genero 
 *      description: El API de Genero 
*/
// ALL
/**
 * @swagger 
 * /api/genders/:
 *  get: 
 *    tags: [Genero]    
 *    summary: Traer todos los generos 
 *    description: Traer todos los generos 
 *    responses: 
 *      '200':
 *        description: 'Todos los Generos en la api son...'
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Genero'
 *      '401':
 *        description: 'Acceso no autorizado'
 *      '404':
 *        description: 'No se encontro ningun genero'    
*/
/**
 * @swagger 
 * /api/genders/:
 *  post: 
 *    tags: [Genero]    
 *    summary: Crear el genero #id
 *    description: Crea el genero en la db 
 *    requestBody: 
 *      required: true 
 *      content: 
 *        application/json: 
 *          schema: 
 *            $ref: '#/components/schemas/Genero' 
 *    responses: 
 *      '200':
 *        description: 'El genero se creo'
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Genero' 
 *      '401':
 *        description: 'Acceso no autorizado'
 *      '404':
 *        description: 'Error no se pudo crear'
*/
//READ
/**
 * @swagger 
 * /api/genders/{id}:
 *  get: 
 *    tags: [Genero]    
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el genero #id
 *    summary: Traer el genero #id
 *    description: Traer el genero #id 
 *    responses: 
 *      '200':
 *        description: 'El genero solicitado es...'
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Genero'
 *      '401':
 *        description: 'Acceso no autorizado'
 *      '404':
 *        description: 'No se encontro el genero'
*/
//UPDATE
/**
 * @swagger 
 * /api/genders/{id}:
 *  patch: 
 *    summary: Actualizar el genero #id
 *    description: Actualizar el genero en la bd 
 *    tags: [Genero]        
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Genero #id 
 *    requestBody: 
 *      required: true 
 *      content: 
 *        application/json: 
 *          schema: 
 *            $ref: '#/components/schemas/Genero'  
 *    responses: 
 *      '200':
 *        description: 'Para actualizar el genero #id'
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Genero'
 *      '401':
 *        description: 'Acceso no autorizado'
 *      '404':
 *        description: 'No se encontro el genero'
*/
//DELETE
/**
 * @swagger 
 * /api/genders/{id}:
 *  delete: 
 *    summary: Eliminar el Genero #id 
 *    description: Eliminar el genero segun el id 
 *    tags: [Genero]    
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Si el ID existe se elimina de la bd 
 *    responses: 
 *      '200':
 *        description: 'El genero se elimino'
 *      '401':
 *        description: 'Acceso no autorizado'
 *      '404':
 *        description: 'Error'
*/

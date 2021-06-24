const express = require("express");
var GeneroController = require("../controllers/Genero");
const router = express.Router();
const auth = require("../middlewares/auth");

//test de controlador tabla

router.get('/test-de-controlador',GeneroController.test); 
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
router.get("/", auth, GeneroController.all);

/**
 * @swagger 
 * /api/genders/:
 *  post: 
 *    tags: [Genero]    
 *    summary: Crear el genero #id
 *    description: solo para probar el controlador 
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
router.post("/", auth, GeneroController.create);


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
 *        description: The book id
 *    summary: Traer el genero #id
 *    description: solo para probar el controlador 
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
router.get("/:id", auth,GeneroController.findById);




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
 *        description: The book id
 *    requestBody: 
 *      required: true 
 *      content: 
 *        application/json: 
 *          schema: 
 *            $ref: '#/components/schemas/Genero'  
 *    responses: 
 *      '200':
 *        description: 'Para actualizar la id'
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
router.patch("/:id", auth, GeneroController.update);

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
router.delete("/:id", auth, GeneroController.delete);


module.exports = router;

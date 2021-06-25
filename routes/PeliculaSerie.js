const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const PeliculaSerieController = require("../controllers/PeliculaSerie"); 
// ALL

/**
 * @swagger 
 * components:
 *   schemas:
 *     PeliculaSerie:
 *       type: object
 *       required:
 *         - titulo
 *         - fechaDeCreacion
 *         - calificacion 
 *       properties:
 *         id:
 *           type: string
 *           description: El id de la PeliculaSerie que se genera automaticamente
 *         titulo:
 *           type: string
 *           description: Titulo de la PeliculaSerie 
 *         fechaDeCreacion:
 *           type: date
 *           description: Fecha de creacion de la PeliculaSerie 
 *         calificacion: 
 *          type: int 
 *          description: Calificacion de la PeliculaSerie del 1 al 5 
 *       example:
 *         id: 1
 *         titulo: Volver al futuro 1
 *         fechaDeCreacion: 01/01/1994
 *         calificacion: 4
 */ 

/** 
 * @swagger
 *  tags:    
 *      name: Peliculas-Series 
 *      description: El API de Peliculas/Series 
*/

/** @swagger 
 * /api/movies/:
 *  get: 
 *    summary: Traer todas las peliculas/series 
 *    description: Traer todos las peliculas y series 
 *    tags: [Peliculas-Series]  
 *    responses: 
 *      '200':
 *        description: 'Las peliculas y libros son...'
 *        content: 
 *          application/json:
 *                  schema: 
 *                      type: array 
 *                      items:  
 *                          $ref: '#/components/schemas/PeliculaSerie'
 *      '404':
 *        description: 'No se encontro ninguna la Pelicula/Serie'
 *      '401':
 *        description: 'Acceso no autorizado'
*/
router.get("/", auth, PeliculaSerieController.all);


/**
 * @swagger 
 * /api/movies/:
 *  post: 
 *    summary: Crear la pelicula Serie 
 *    description: Crear una pelicula/serie  
 *    tags: [Peliculas-Series]  
 *    requestBody: 
 *      required: true
 *      content: 
 *          application/json: 
 *            schema: 
 *              $ref: '#/components/schemas/PeliculaSerie'
 *    responses:  
 *      '200':
 *        description: 'La pelicula serie se creo'
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/PeliculaSerie' 
 *      '404':
 *        description: 'La pelicula serie no se pudo crear'
 *      '401':
 *        description: 'Acceso no autorizado'
*/
router.post("/", auth, PeliculaSerieController.create);

//READ
/**
 * @swagger 
 * /api/movies/{id}:
 *  get: 
 *    tags: [Peliculas-Series]    
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id Pelicula-Serie
 *    summary: Traer la Pelicula-Serie #id
 *    description: Traer una pelica o serie segun su id
 *    responses: 
 *      '200':
 *        description: 'La pelicula serie solicitada es...'
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/PeliculaSerie'
 *      '404':
 *        description: 'La pelicula serie no se encontro'
 *      '401':
 *        description: 'Acceso no autorizado'
*/
router.get("/:id", auth, PeliculaSerieController.read);

//UPDATE
/**
 * @swagger 
 * /api/movies/{id}:
 *  patch: 
 *    summary: Actualizar la Pelicula/Serie #id 
 *    description: Actualizar una pelicula/serie segun su id  
 *    tags: [Peliculas-Series]  
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Pelicula/Serie #id 
 *    requestBody: 
 *      required: true 
 *      content: 
 *        application/json:
 *          schema: 
 *            $ref: '#/components/schemas/PeliculaSerie'  
 *    responses: 
 *      '200':
 *        description: 'Para actualizar la id'
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/PeliculaSerie'
 *      '404':
 *        description: 'La pelicula serie no se encontro'
 *      '401':
 *        description: 'Acceso no autorizado'
*/
router.patch("/:id", auth,PeliculaSerieController.update);

//DELETE
/**
 * @swagger 
 * /api/movies/{id}:
 *  delete: 
 *    summary: Eliminar la Pelicula/Serie #id  
 *    description: Eliminar la Pelicula/Serie segun el #id 
 *    tags: [Peliculas-Series]  
 *    parameters: 
 *      - in: path
 *        name: id
 *        schema: 
 *         type: string
 *         requred: true 
 *         description: El id de la PeliculaSerie  
 *    responses: 
 *      '200':
 *        description: 'La pelicula/serie fue eliminada.'
 *      '404':
 *        description: 'La pelicula/serie no  se encontro.'
 *      '401':
 *        description: 'Acceso no autorizado'
*/
router.delete("/:id", auth, PeliculaSerieController.delete);

module.exports = router;

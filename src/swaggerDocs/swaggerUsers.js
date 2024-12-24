/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users that available on the API
 *     tags:
 *       - Users
 *     parameters:
 *          - in: query
 *            name: filter
 *          - in: query
 *            name: limit
 *            schema:
 *              type: integer
 *            required: true
 *            description: Number of users to fetch
 *     security:
 *         - bearerAuth: ['bearer token']
 *     responses:
 *       200:
 *         description: A list of users 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  status:
 *                      type: string
 *                      example: "success"
 *                  data:
 *                      type: array
 *                      items: 
 *                          type: object
 *                          properties:
 *                              id:
 *                                 type: integer
 *                                 example: 1
 *                              name:
 *                                  type: string
 *                                  example: "Doshka"
 *               example: 
 *                  status: "Success"
 *                  data: 
 *                     - id: 0
 *                       name: "Salim"
 *                     - id: 2
 *                       name: "Hassan"
 *    
 *          
 *   # Create new user section 
 *   post:
 *      summary: Create a new user
 *      tags: 
 *         - Users
 *      requestBody:
 *          
 */

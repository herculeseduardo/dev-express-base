/**
* @swagger
* definitions:
*   User:
*     type: object
*     required:
*       - id
*       - name
*       - email
*       - lastUpdate
*     properties:
*       id:
*         type: number
*       name:
*         type: string
*       email:
*         type: string
*       lastUpdate:
*         type: number
*   Users:
*     type: array
*     items:
*       $ref: '#/definitions/User'
*/

/**
 * @swagger
 * /api/user:
 *   get:
 *     description: Retrieve the full list of users
 *     tags:
 *       - users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: users
 *         schema:
 *           $ref: '#/definitions/User'
 */

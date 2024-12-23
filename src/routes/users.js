const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a greeting message
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A simple "Hello World" message
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */

router.get('/', (req, res) => {
    res.send('Hello from users')
})

module.exports = router;
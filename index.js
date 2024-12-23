const express = require('express');
const { swaggerUi, swaggerSpec } = require('./swagger'); // Import swaggerUi and swaggerSpec
const usersRouter = require('./src/routes/users')
const port = 3000;

const app = express();

// API documentation route using swaggerUi
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use the users router for /users path
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Application running on http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
})
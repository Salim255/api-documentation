const { swaggerUi, swaggerSpec } = require('./swagger'); // Import swaggerUi and swaggerSpec

// Import Express framework for building Express application
const express = require('express');

// Create an instance of Express application
const app = express();

// Import route handler for different API endpoints
const userRouter = require('./src/routes/users');

// Export function that sets up and return Express app
module.exports = () => {

    // API documentation route using swaggerUi
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Define API routes and associate them with their respective routers
    app.use('/users', userRouter);

    // Return the configured Express application
    return app;
}

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API Documentation',
            version: '1.0.0',
            description: 'Salim API documentation for my application',
        },
        
        severs: [
            {
                url: 'http://localhost:3000'
            }
        ],

        components: {
            securitySchemes: {
                bearerAuth: { // Define Bearer token security scheme
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT' // Optional specify JWT or another format
                }
            },

            security: [
                {
                    bearerAuth: []  // Default security for all routes (you can override this per route)
                }
            ]
        }
    },
    apis: ['./src/swaggerDocs/*.js']
}

// Generate Swagger specification
const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = { swaggerUi, swaggerSpec };
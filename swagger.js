const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API Documentation',
            version: '1.0.0',
            description: 'API documentation for my application',
        },

        severs: [
            {
                url: 'http://localhost:3000'
            }
        ] 
    },
    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)
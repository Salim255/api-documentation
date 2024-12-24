// Import the configured Express application
const app = require('./app');

// Set up the Express application port
const port = 3000;

// Start the Express application on the specified port 
app().listen(port, () => {
    // Log a message that to indicate that the application is running
    // and listening for requests
    console.log(`Application running on http://localhost:${port}`);

    // Log a message that indicate where the Swagger documentation is available
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
})
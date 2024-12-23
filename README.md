# api-documentation
## Why document ?
- APIs are designed for developers to use
- Need to know how to use it
- An API is only as good as its documentation

## What to document ?
- Everything needed to use the API
- Available endpoints (paths)
    - /api/recipes 
    - all the endpoints
- Supported methods
    - GET, POST, PUT, PATCH, DELETE
- Format of payload (inputs)
    - Parameters
    - Post Json format
- Format of responses(outputs)
    - Response JSON format
- Authentication process


## Option for documentation
- Manual option
    - Word doc
    - Markdown
    - The drawbacks of this approach, and one of them is that you need to manually maintain update to the documentation every time you make changes, and this can be quite time consuming, and add risk that documentation becomes old and outdated and no longer useful for the API
- Automated
    - Use metadata from code (comments)
    - Generate documentation pages automatically for the API

## In this section
- Explore tools for making documentation seamless, so how you automate the API generation and create really nice easy to use documentation pages
- Add documentation for our API


npm install swagger-jsdoc swagger-ui-express

## Swagger
- Swagger is open source framework designed to simplify and standardize the process of documenting 
and testing RESTful APIs. 

### Core Components of Swagger
- 1) Swagger/OpenAPI Specification:
    - A standard format for defining RESTful APIs.
    - Written in YAML or JSON to describe endpoints, parameters, responses, and more
- 2) Swagger Editor:
    - A web-based tool for writing API documentation using the Swagger/OpenAPI Specification
    - Provides live feedback and previews
- 3) Swagger UI:
    - A visual interface that automatically generates interactive API documentation
    - Allows developers and testers to interact with APIs directly through the browser

### Why Use Swagger ?
- Standardized API Design:
    Provides a consistent way to document and define RESTful APIs.
- Interactive Documentation:
    - Allows users to test APIs directly within the documentation interface.
- Ease of Collaboration: 
    - Enhances communication between developers, testers, and stakeholders with detailed, human-readable API descriptions
- Code Generation:
    - Reduces development effort by generating sever stubs, client libraries, and other resources.
- Tool Integration:
    - Works seamlessly with CI/CD pipelines, testing framework, and API management tools


### Swagger Workflow
- API Design:
    - Define your API endpoints, methods, parameters, and responses using Swagger/OpenAPI Specification
- Documentation:
    - Use Swagger UI or Swagger Editor to create human-readable and interactive API documentation.
- Development:
    - Generate server stubs and clients SDKs to kickstart API implementation
- Testing: 
    - Validate the API with Swagger Inspector or interact with endpoints through Swagger UI.
- Deployment:
    - Publish your API documentation for external use or internal Collaboration

#### schema:
- Defines the structure of the data used in your API, requests and responses.
- It describe the data types, properties, and constraints for request bodies, query parameters, headers, and responses.
- It acts as a blueprint for what the API expect or Provides

##### Where Is schema Used ?
- 1) Request Body:
    - Specifies the format of the data that the client sends to the API.
- 2) Response: 
    - Describe the structure of the data that the server sends back to the client.
- 3) Parameters:
    - Used in defining path or query parameters, when they involve complex types

###### Components of schema 
- 1) type:
    - Specifies the type of data. Common types include:
        - string (text data)
        - number (any numerical value)
        - integer (whole number)
        - boolean (true / false)
        - array (list of items)
        - object (a structured object with properties)
- 2) properties:
- Defines the fields of an object. Each property includes:
    - Name: The key in the object
    - Type: The type of the value associated with the kaye
    - Description: (optional) A description of the field

- Example of type & properties
schema:
  type: object
  properties:
    id:
      type: integer
      description: Unique identifier of the user.
    name:
      type: string
      description: Name of the user.
    email:
      type: string
      description: Email address of the user.

- 3) Required
    - Lists the field that must be included in the request.
    - example:
        required:
             - id
             - name

- 4) Example 
    - Provides a sample value to help understand the format of the data
    - example :
        example:
            id: 1
            name: "John Doe"
            email: "john.doe@example.com"
- 5) Items:
    - Used when defining an array. It Specifies the type and structure of the array elements
        - example (Array of Strings):
            type: array
            items:
                type: string

        - Example (Array of Objects):
            type: array
            items:
                type: object
            properties:
                id:
                    type: integer
                name:
                    type: string


- 6) enum:
    - Define a set of allowed values for a field
    - example:
        type: string
        enum:
            - pending
            - approved
            - rejected

- 7) How it comes together 
    - Example: Request Body Schema
requestBody:
  content:
    application/json:
      schema:
        type: object
        properties:
          id:
            type: integer
            description: User's unique identifier.
          name:
            type: string
            description: Full name of the user.
          status:
            type: string
            enum: [active, inactive]
            description: Status of the user account.
        required:
          - id
          - name
        example:
          id: 123
          name: "Alice"
          status: "active"

- Example: Response Schema
responses:
  200:
    description: Success
    content:
      application/json:
        schema:
          type: object
          properties:
            message:
              type: string
              description: Status message.
            data:
              type: object
              properties:
                id:
                  type: integer
                name:
                  type: string
          example:
            message: "User retrieved successfully."
            data:
              id: 1
              name: "John Doe"

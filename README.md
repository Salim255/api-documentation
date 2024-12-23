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

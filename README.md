# node-js-express-rest-web-services

## Initial Instructions
1. Install package.json dependencies via `npm install`

2. Use the `gulp` command to start the server. `gulp-nodemon` watches for file changes and automatically restarts server.

3. Make sure mongodb is running.

4. Follow `DataImportInstructions.txt` instructions to import mongodb data.

## Postman
1. Download Postman
2. Getting data is simple, see below.
3. Post, Patch, and Remove require a Header and a Body
#### Headers
 - content-type : application/json
#### Body
 - Depends on what you're trying to do ;)

## Getting Data
1. Two routers have been created to accept either filter by 
- `bookId` e.g. `http://localhost:8000/api/books/599102647d51ecf30a6bd887` 
- `genre` e.g. `http://localhost:8000/api/books/?genre=Historical%20Fiction`

## Post, Put, Patch, or Remove Data
1. Send your Header and Body as well as your request type.

## Running Tests
`gulp test`

## HATEOS
Allows API to self document.

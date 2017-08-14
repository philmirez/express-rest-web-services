# node-js-express-rest-web-services

## Instructions
1. Install package.json dependencies via `npm install`

2. Use the `gulp` command to start the server. `gulp-nodemon` watches for file changes and automatically restarts server.

3. Make sure mongodb is running.

4. Follow `DataImportInstructions.txt` instructions to import mongodb data.

5. Two routers have been created to accept either filter by 
- `bookId` e.g. `http://localhost:8000/api/books/599102647d51ecf30a6bd887` 
- `genre` e.g. `http://localhost:8000/api/books/?genre=Historical%20Fiction`

/*
Express is a minimal and flexible 
Node.js web application framework 
that provides a robust set of features 
for web and mobile applications.
*/
var express = require('express');

/*
Mongoose provides a straight-forward, 
schema-based solution to model your application data. 
It includes built-in type casting, validation, query building, 
business logic hooks and more, out of the box.
*/
var mongoose = require('mongoose');

/*
Node.js body parsing middleware.
*/
var bodyParser = require('body-parser');

// execute express server
var app = express();

// looks for variable in environment and if not there then it will set it at 3000
var port = process.env.PORT || 8000;

var db;

if(process.env.ENV == 'Test')
    db = mongoose.connect('mongodb://localhost/bookAPI_test',{useMongoClient: true});
else{
    db = mongoose.connect('mongodb://localhost/bookAPI',{useMongoClient: true});
}

var Book = require ('./models/bookModel');

//parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({extended:true}))


/*
Returns middleware that only parses 
json and only looks at requests 
where the Content-Type header matches the 
type option. This parser accepts any 
Unicode encoding of the body and 
supports automatic inflation of 
gzip and deflate encodings.
*/
// parse application/json
app.use(bodyParser.json())

//inject Book aka bookModel into bookRoutes.js via parameter
bookRouter = require('./routes/bookRoutes')(Book);

// http://localhost:@PORT@/api/books/
app.use('/api/books', bookRouter);
// http://localhost:@PORT@/api/authors/
//app.use('/api/authors', authorRouter);



// '/' - root directory
// req - request from client
// res - response from server
app.get('/', function(req, res) {
    // response from the server
    res.send('welcome to my API!!!!');
});


app.listen(port, function() {
    console.log('Gulp is running on PORT: ' + port);
});

// allows supertest to exec on the app
module.exports = app;

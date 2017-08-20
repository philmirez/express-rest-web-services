var express = require('express');

var routes = function(Book) {

    var bookRouter = express.Router();


    bookRouter.route('/')
        .post(function(req, res){
            var book = new Book(req.body);
            book.save();
            res.status(201).send(book);
        })
        .get(function(req, res){
            var responseJson = {hello: "This is my api"};
            var query = {};

            // clean way to avoid taking random user input
            // e.g. http://localhost:@PORT@/api/Books?genre=Historical%20Fiction
            if(req.query.genre)
            {
                query.genre = req.query.genre;
            }
            Book.find(query, function(err, books){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(books);
            });
        });
        
    bookRouter.route('/:bookId')
        .get(function(req, res){
            Book.findById(req.params.bookId, function(err, book){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(book);
            });
        });

    return bookRouter;

};

module.exports = routes;
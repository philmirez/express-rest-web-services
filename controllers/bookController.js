var bookController = function(Book) {

    var post = function(req, res){

        // creates an instance of the Book with req.body
        var book = new Book(req.body);

        if(!req.body.title){
            res.status(400);
            res.send('Title is required');
        }
        else {
            book.save();
            res.status(201);
            res.send(book);
        }


    }

    var get = function(req, res){
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
            else{
                var returnBooks = [];
                books.forEach(function(element, index, array){
                    // this will strip out all the mongoose stuff and leave us with just JSON
                    var newBook = element.toJSON();
                    newBook.links = {};
                    newBook.links.self = 'http://' + req.headers.host + '/api/books/' + newBook._id;
                    returnBooks.push(newBook);

                });
                res.json(returnBooks);
            }

        });
    }

    return {
        post: post,
        get: get
    }

}

module.exports = bookController;


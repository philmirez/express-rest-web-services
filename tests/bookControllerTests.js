var should = require('should'),
    sinon = require('sinon');

describe('Book Controller Tests:', function(){
    describe('Post', function(){
        it('should not allow an empty title on post', function(){
            var Book = function(book){this.save = function(){}};

            var req = {
                body: {
                    author: 'Jon'
                }
            }

            // utilize sinon framework
            // spy keeps track of what is called and what it is called with
            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            }

            // this completes the test and hooks into the controller
            var bookController = require('../controllers/bookController.js')(Book);
            bookController.post(req, res);

            // this will return a true or false
            // args is an array of each time this function is called and what the arguments were everytime the function was called
            res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0]);
            res.send.calledWith('Title is required').should.equal(true);
        })
    })
})
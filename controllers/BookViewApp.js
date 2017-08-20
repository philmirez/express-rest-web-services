
var BookViewApp = angular.module('BookViewApp', []);

BookViewApp.controller('BookController', function ($scope, $http) {
    $scope.booksData = $http({
        method: 'GET',
        url: 'localhost:8070/api/books'
    }).then(function successCallBack(response) {
        console.log(response);
    }, function errorCallBack(response) {
        console.log('error');
    });
});
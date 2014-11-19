'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');

app.controller('RequestCtrl', ['$scope', 'MyBookService', function($scope, MyBookService) {
 
    $scope.rBook = {
       
        "title": '',
        "isbn_10": '',
        "isbn_13": '',
        "author": '',
        "publisher": '',
        "edition": '',
        "category": ''

    };
    

    
     // authservice.settings().then(function(data){
     //    $scope.test.user = data.id;
     // });

    //MyBookService.booksRequested.save('', $scope.r);

    $scope.AllRequested = true;
    $scope.TopRequested = false;
    $scope.AddBook = false;

    $scope.showAllRequested = function() {

        $scope.result = MyBookService.booksRequested.get();
           console.log($scope.result);

        $scope.AllRequested = true;
        $scope.TopRequested = false;
        $scope.AddBook = false;
    };

    $scope.showTopRequested = function() {

         $scope.topRequested = MyBookService.topRequested.get();

        $scope.AllRequested = false;
        $scope.TopRequested = true;
        $scope.AddBook = false;
    };

    $scope.showAddBook = function(){

        $scope.AddBook = true;
        $scope.AllRequested = false;
        $scope.TopRequested = false;

    };

    $scope.AddBookRequested = function(){

         $scope.request = MyBookService.booksRequested.save('', $scope.rBook);
         console.log($scope.request);

    };
    
    $scope.showAllRequested();


      $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });
}]);

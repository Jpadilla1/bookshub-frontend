'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('BookCtrl', function($scope) {

    $scope.searchInput = '';

    $scope.newBookForm = {
        "title": '',
        "isbn": '',
        "author": '',
        "edition": '',
        "category": ''
    };

    var originalNewBookForm = angular.copy($scope.newBookForm);

    $scope.submit = function() {
        
    }

    $scope.clear = function() {
        $scope.newBookForm = angular.copy(originalNewBookForm);
        $scope.bookForm.$setPristine();
    }

    $scope.submitByTitle = function() {
        alert("tile");
    }

    $scope.submitByIsbn10 = function() {
        alert("isbn10");
    }

    $scope.submitByIsbn13 = function() {
        alert("isbn 13");
    }

    $scope.submitByAuthor = function() {
        alert("author");
    }

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });
});

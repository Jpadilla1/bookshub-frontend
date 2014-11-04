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
    $scope.show = {
        "searchForm": true,
        "newForm": false,
        "result": false
    };
    $scope.newBookForm = {
        "title": '',
        "isbn": '',
        "author": '',
        "edition": '',
        "category": ''
    };
    $scope.searchResult = [{
        "title": 'Starting Out With Java',
        "isbn13": '978-0132855839',
        "isbn10": 0132855836,
        "author": 'Tonny Gaddis',
        "edition": '4th',
        "publisher": 'Pearson'
    }, {
        "title": 'Starting Out With Java',
        "isbn13": '978-0132855839',
        "isbn10": 0132855836,
        "author": 'Tonny Gaddis',
        "edition": '4th',
        "publisher": 'Pearson'
    }];

    $scope.searchIsMoved = false;

    var originalNewBookForm = angular.copy($scope.newBookForm);

    $scope.submit = function() {

    }

    $scope.clear = function() {
        $scope.newBookForm = angular.copy(originalNewBookForm);
        $scope.bookForm.$setPristine();
    }

    $scope.notFound = function() {
        $scope.show.result = !$scope.show.result;
        $scope.show.searchForm = !$scope.show.searchForm;
        $scope.show.newForm = !$scope.show.newForm;
    }

    $scope.submitByTitle = function() {
        $scope.moveSearchForm();
        $scope.show.result = !$scope.show.result;
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

    $scope.moveSearchForm = function() {
        if ($scope.searchIsMoved) {
            document.getElementById("add-book-search-form").style.marginTop = "35%";
            document.getElementById("add-book-search-form").style.marginBottom = "30%";
            $scope.searchIsMoved = false;
        } else {
            document.getElementById("add-book-search-form").style.marginTop = "0%";
            document.getElementById("add-book-search-form").style.marginBottom = "5%";
            $scope.searchIsMoved = true;
        }
    }

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });
});

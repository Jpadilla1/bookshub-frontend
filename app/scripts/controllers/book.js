'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('BookCtrl', function($scope,$filter) {

    $scope.searchInput = '';
    $scope.show = {
        "searchForm": true,
        "newForm": false,
        "result": false,
        "offer": false
    };
    $scope.offerForm = {
        "price": '',
        "description": '',
        "quantity": '',
        "condition": '',
        "book": '',
        "owner": ''
    };
    $scope.newBookForm = {
        "title": '',
        "isbn": '',
        "author": '',
        "edition": '',
        "category": ''
    };
    $scope.searchResult = [{
        "id": 1,
        "title": 'Starting Out With Java',
        "isbn13": '978-0132855839',
        "isbn10": 0132855836,
        "author": 'Tonny Gaddis',
        "edition": '4th',
        "publisher": 'Pearson'
    }, {
        "id": 2,
        "title": 'Starting Out With Java',
        "isbn13": '978-0132855839',
        "isbn10": 0132855836,
        "author": 'Tonny Gaddis',
        "edition": '4th',
        "publisher": 'Pearson'
    }];

    $scope.setBookIdOffer = function(bookId) {
        $scope.offerForm.book = bookId;
        $scope.show.result = !$scope.show.result;
        $scope.show.searchForm = !$scope.show.searchForm;
        $scope.show.offer = !$scope.show.offer;    
    }

    $scope.submitOffer = function() {
        
    }

    $scope.getActualDate = function() {
        var actualDate = $filter('date')(new Date(), 'MM dd yyyy');
        return actualDate;
    }

    $scope.searchIsMoved = false;

    var originalNewBookForm = angular.copy($scope.newBookForm);
    var originalOfferForm =  angular.copy($scope.offerForm);

    $scope.submitNewBook = function() {
        $scope.show.newForm = ! $scope.show.newForm;
        $scope.show.offer = ! $scope.show.offer;
    }

    $scope.clearNewBookForm = function() {
        $scope.newBookForm = angular.copy(originalNewBookForm);
        $scope.bookForm.$setPristine();
    }

     $scope.clearOfferForm = function() {
        $scope.offerForm = angular.copy(originalOfferForm);
        $scope.newOfferForm.$setPristine();
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

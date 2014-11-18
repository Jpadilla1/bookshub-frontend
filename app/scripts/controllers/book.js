'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('BookCtrl', ['$scope', 'MySearch', 'MyOfferService', 'MyBookService', 'authService', function($scope, MySearch, MyOfferService, MyBookService, authService) {
    $scope.searchIsMoved = false;
    $scope.searchInput = '';
    $scope.createAndOffer = '';

    $scope.autoCompleteResults = '';

    $scope.bookCategories = [{
        "value": 'accounting',
        "name": 'Accounting'
    }, {
        "value": 'architecture',
        "name": 'Architecture'
    }, {
        "value": 'art',
        "name": 'Art'
    }, {
        "value": 'biology',
        "name": 'Biology'
    }, {
        "value": 'business_administration',
        "name": 'Business Administration'
    }, {
        "value": 'computer_science',
        "name": 'Computer Science'
    }, {
        "value": 'design',
        "name": 'Design'
    }, {
        "value": 'engineering',
        "name": 'Engineering'
    }, {
        "value": 'english',
        "name": 'English'
    }, {
        "value": 'french',
        "name": 'French'
    }, {
        "value": 'finance',
        "name": 'Finance'
    }, {
        "value": 'history',
        "name": 'History'
    }, {
        "value": 'marketing',
        "name": 'Marketing'
    }, {
        "value": 'mathematics',
        "name": 'Mathematics'
    }, {
        "value": 'medical',
        "name": 'Medical'
    }, {
        "value": 'philosophy',
        "name": 'Philosophy'
    }, {
        "value": 'psychology',
        "name": 'Psychology'
    }, {
        "value": 'spanish',
        "name": 'Spanish'
    }, {
        "value": 'social_science',
        "name": 'Social Science'
    }, {
        "value": 'travel',
        "name": 'Travel'
    }, {
        "value": 'other',
        "name": 'Other'
    }];

    $scope.conditions = [{
        "name": 'New',
        "value": "new"
    }, {
        "name": 'Used',
        "value": "used"
    }];

    $scope.autoCompleteSearch = function(selection) {
        var result = validateField($scope.searchInput);

        $scope.autoCompleteResults = $scope.makeExternalAPISearch(result, selection);

        $scope.moveSearchForm();
        $scope.show.result = !$scope.show.result;
    };

    $scope.makeExternalAPISearch = function(result, selection) {
        if (result) {

            var params = {
                'searchBy': selection,
                'searchValue': $scope.searchInput
            };

            var search = MySearch.bookAutoCompleteSearch.get(params);

            return search;
        }
    };

    $scope.show = {
        "searchForm": true,
        "newForm": false,
        "result": false,
        "offer": false,
        "newBookAndOfferForm": false
    };
    $scope.offerForm = {
        "price": '',
        "description": '',
        "quantity": '',
        "condition": '',
        "book": '',
        "owner": '',
        "end_date": ''
    };
    $scope.newBookForm = {
        "title": '',
        "isbn_10": '',
        "isbn_13": '',
        "author": '',
        "publisher": '',
        "edition": '',
        "category": ''
    };

    $scope.setBookIdOffer = function(bookId) {
        $scope.offerForm.book = bookId;
        $scope.show.result = false;
        $scope.show.searchForm = false;
        $scope.show.offer = true;
        $scope.show.newBookAndOfferForm = false;
    };

    $scope.submitOffer = function() {
        $scope.submittedOffer = true;
        authService.settings().then(function(data) {
            $scope.offerForm.owner = data.id;
            MyOfferService.bookOffer.save('', $scope.offerForm);
        });

    };

    $scope.submitNewBook = function() {
        $scope.addedNewBook = true;
        MyBookService.specificBook.save('', $scope.newBookForm);
    };

    $scope.submitBookAndCreateOffer = function() {
        $scope.newBook = MyBookService.specificBook.save('', $scope.newBookForm);

        $scope.$watch('newBook.id', function() {
            $scope.setBookIdOffer($scope.newBook.id);
        });
    };

    $scope.getActualDate = function() {
        var actualDate = $filter('date')(new Date(), 'MM dd yyyy');
        return actualDate;
    };


    var originalNewBookForm = angular.copy($scope.newBookForm);
    var originalOfferForm = angular.copy($scope.offerForm);


    $scope.clearNewBookForm = function() {
        $scope.newBookForm = angular.copy(originalNewBookForm);
        $scope.bookForm.$setPristine();
    };

    $scope.clearOfferForm = function() {
        $scope.offerForm = angular.copy(originalOfferForm);
        $scope.newOfferForm.$setPristine();
    };

    $scope.notFound = function() {
        $scope.show.result = !$scope.show.result;
        $scope.show.searchForm = !$scope.show.searchForm;
        $scope.show.newForm = !$scope.show.newForm;
    };

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
    };


    $scope.addBookAndOffer = function(index) {
        $scope.show.result = false;
        $scope.show.searchForm = false;
        $scope.show.offer = false;
        $scope.show.newForm = false;
        $scope.show.newBookAndOfferForm = true;

        $scope.createAndOffer = true;

        var specificResult = $scope.autoCompleteResults.results[index];

        document.getElementById('auto_title').value = $scope.newBookForm.title = specificResult.title;
        document.getElementById('auto_isbn_10').value = $scope.newBookForm.isbn_10 = specificResult.isbn_10;
        document.getElementById('auto_isbn_13').value = $scope.newBookForm.isbn_13 = specificResult.isbn_13;
        document.getElementById('auto_author').value = $scope.newBookForm.author = specificResult.author[0];
        document.getElementById('auto_publisher').value = $scope.newBookForm.publisher = specificResult.publisher;
    };

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });
}]);

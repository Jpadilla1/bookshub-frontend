'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('BookCtrl', ['$scope', 'MySearch', 'MyOfferService', 'MyBookService', 'authService', function($scope, MySearch, MyOfferService, MyBookService,authService){
  $scope.searchIsMoved = false;
  $scope.searchInput = '';

  $scope.autoCompleteResults = '';

  $scope.autoCompleteSearch = function(selection){
    var result = validateField($scope.searchInput);

    if (result){
      var params = {
        'searchBy': selection,
        'searchValue': $scope.searchInput
      };

      $scope.autoCompleteResults = MySearch.bookAutoCompleteSearch.get(params);

      console.log($scope.autoCompleteResults);

      $scope.moveSearchForm();
      $scope.show.result = !$scope.show.result;
    }
  };

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
      "owner": '',
      "end_date": ''
  };
  $scope.newBookForm = {
      "title": '',
      "isbn_10": '',
      "isbn_13": '',
      "author": '',
      'publisher': '',
      "edition": '',
      "category": ''
  };

  $scope.setBookIdOffer = function(bookId) {
      $scope.offerForm.book = bookId;
      $scope.show.result = false;
      $scope.show.searchForm = false;
      $scope.show.offer = true;
  };

  $scope.submitOffer = function() {
    var test = authService.settings();
    console.log(test);

    $scope.offerForm.owner = "1";
    $scope.offerForm.end_date = '2014-11-08 20:24:02';
    var test = MyOfferService.bookOffer.save('', $scope.offerForm);
    console.log(test);
  };

  $scope.submitNewBook = function() {
    var newBook = MyBookService.specificBook.save('', $scope.newBookForm);
    console.log(newBook);
    console.log(newBook.id);

    $scope.setBookIdOffer(newBook.id);
  };
  
  $scope.getActualDate = function() {
      var actualDate = $filter('date')(new Date(), 'MM dd yyyy');
      return actualDate;
  };


  var originalNewBookForm = angular.copy($scope.newBookForm);
  var originalOfferForm =  angular.copy($scope.offerForm);


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


  $scope.addBookAndOffer = function(index){
    $scope.show.result = false;
    $scope.show.searchForm = false;
    $scope.show.offer = false;
    $scope.show.newForm = true;

    var specificResult = $scope.autoCompleteResults.results[index];
    console.log(specificResult);
    document.getElementById('book_title').value = $scope.newBookForm.title = specificResult.title;
    document.getElementById('book_isbn_10').value = $scope.newBookForm.isbn_10 = specificResult.isbn_10;
    document.getElementById('book_isbn_13').value = $scope.newBookForm.isbn_13 = specificResult.isbn_13;
    document.getElementById('book_author').value = $scope.newBookForm.author = specificResult.author[0];
    document.getElementById('book_publisher').value = $scope.newBookForm.publisher = specificResult.publisher;
  };

  $scope.$on('$viewContentLoaded', function() {
      defaultNavbar();
  });
}]);

'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('BookCtrl', ['$scope', 'MySearch', 'MyOfferService', 'authService', function($scope, MySearch, MyOfferService, authService){

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
      "isbn": '',
      "author": '',
      "edition": '',
      "category": ''
  };

  $scope.setBookIdOffer = function(bookId) {
      $scope.offerForm.book = bookId;
      $scope.show.result = !$scope.show.result;
      $scope.show.searchForm = !$scope.show.searchForm;
      $scope.show.offer = !$scope.show.offer;
  }

  $scope.submitOffer = function() {
      if(authService.authenticationStatus()){
        $scope.offerForm.owner = "1";
        $scope.offerForm.end_date = '2014-11-08 20:24:02';
        var test = MyOfferService.bookOffer.save('', $scope.offerForm);
        console.log(test);
      }
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
}]);

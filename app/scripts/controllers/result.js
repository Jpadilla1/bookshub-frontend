'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');

app.controller('ResultCtrl', ['$scope', 'MyBookService','MySearch', 'MyOfferService' ,function($scope, MyBookService, MySearch,MyOfferService) {
 
  $scope.searchInput = '';


    $scope.Searchresults = {
        "title": '',
        "isbn_10": '',
        "isbn_13": '',
        "author": '',
        "publisher": '',
        "edition": '',
        "category": ''

    };

    $scope.Navbarresults = {
        "title": '',
        "isbn_10": '',
        "isbn_13": '',
        "author": '',
        "publisher": '',
        "edition": '',
        "category": ''

    };
    

    searchBy();
    $scope.New = true;
    $scope.Used  = false;
    $scope.result;

    $scope.showNew = function() {
        $scope.New = true;
        $scope.Used = false;
        searchBy();
    };

    $scope.showUsed = function() {
        $scope.New = false;
        $scope.Used = true;
        searchBy();       
    };


    alert("fs gfhdbg fjdhbgfh");

    $scope.navSearch = function(selection) {

            alert("selection");

            result = validateField($scope.searchInput);
            MySearch.selectionResult = selection;
            MySearch.searchResult = result;
            searchBy();

    };

    $scope.cop = function(selection){
        alert("Cop");
    }
     

    function searchBy() {

        alert("fs gfhdbg fjdhbgfh");

        $scope.selection = MySearch.selectionResult;
        $scope.searchResult = MySearch.searchResult;

        
        if ($scope.searchResult) {
            var params = {
                'searchBy': $scope.selection,
                'searchValue': $scope.searchResult
            };

            MySearch.bookSearch.get(params).$promise.then(function(data){
                $scope.result = data;
                 console.log($scope.result);
            });
        }
    };




     $scope.bookProfile = function(ID){

        MyBookService.bookId = ID;
        console.log(ID);
    };

      $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });


}]);

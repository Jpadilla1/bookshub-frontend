'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');

app.controller('ResultCtrl', ['$scope', 'MyBookService','MySearch' function($scope, MyBookService, MySearch) {
 
    $scope.Results = {
        "title": '',
        "isbn_10": '',
        "isbn_13": '',
        "author": '',
        "publisher": '',
        "edition": '',
        "category": ''

    };

     $scope.searchBy = function(selection) {
            
            MySearch.selection = selection;
            MySearch.searchResult = result;
            if (result) {
                var params = {
                    'searchBy': selection,
                    'searchValue': result
                };

                $scope.results = MySearch.bookSearch.get(params);
                console.log($scope.result);


            }
        }

   




}]);

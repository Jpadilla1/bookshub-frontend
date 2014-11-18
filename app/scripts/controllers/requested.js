'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');

app.controller('RequestCtrl', ['$scope', 'bookservice', function($scope, bookservice) {
 
alert("entro");

        $scope.result = function() {
            //Here we send data to back end
            bookservice.booksRequested()
                .then(function(data){
                    log("entro");
                }, function(data){
                    alert("no entro");
                });
        };



      $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });
}]);

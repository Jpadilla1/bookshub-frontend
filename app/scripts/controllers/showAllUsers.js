'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:ShowAllUsersCtrl
 * @description
 * # ShowAllUsersCtrl
 * Controller of the hubAppApp
 */
var app = angular.module('hubAppApp')
app.controller('ShowAllUsersCtrl', function($scope, $http) {
    $scope.searchInput;
    $scope.users = '';

    $scope.getAllUsers = function() {

        $http.get("https://bookshub.herokuapp.com/api/autocomplete/users/").success(function(data) {
            $scope.users = data;
            console.log(data);
        }).error(function(data) {

        });
    }

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
        $scope.getAllUsers();
    });
});
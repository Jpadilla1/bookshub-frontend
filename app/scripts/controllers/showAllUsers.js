'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:ShowAllUsersCtrl
 * @description
 * # ShowAllUsersCtrl
 * Controller of the hubAppApp
 */
var app = angular.module('hubAppApp')
app.controller('ShowAllUsersCtrl', function($scope, $http, UserService) {
    $scope.searchInput;
    $scope.users = '';

    $scope.getAllUsers = function() {

        $http.get("https://bookshub.herokuapp.com/api/autocomplete/users/").success(function(data) {
            $scope.users = data;
            console.log(data);
        }).error(function(data) {

        });
    }

    $scope.sendId = function(id) {
        UserService.setUserId(id);
        console.log(id);
    }

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
        $scope.getAllUsers();
    });
});
'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:LogInCtrl
 * @description
 * # LogInCtrl
 * Controller of the hubAppApp
 */
//$('.navbar.navbar-inverse').css('background-color', 'rgba(0, 0, 0, 0.74)');

angular.module('hubAppApp')
    .controller('LogInCtrl', ['$scope', 'authService', function($scope, authService) {

        $scope.logInForm = {
            "email": '',
            "password": ''
        };

        $scope.submit = function() {
            //Here we send data to back end
            authService.signin($scope.logInForm.email, $scope.logInForm.password)
                .then(function(data){
                    // success
                }, function(data){
                    // error
                });
        };

        $scope.$on('$viewContentLoaded', function() {
            defaultNavbar();
        });
    }]);

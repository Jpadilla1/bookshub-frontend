'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:LogInCtrl
 * @description
 * # LogInCtrl
 * Controller of the hubAppApp
 */

angular.module('hubAppApp')
    .controller('LogInCtrl', ['$scope', 'authService', '$location', '$timeout', function($scope, authService, $location, $timeout) {

        $scope.logInForm = {
            "email": '',
            "password": ''
        };

        $scope.submit = function() {
            //Here we send data to back end
            authService.signin($scope.logInForm.email, $scope.logInForm.password)
                .then(function(data){
                    $scope.isLogIn = true;
                    $timeout(function(){
                        $location.path('/');
                    }, 2000);
                    // success
                }, function(data){
                    $scope.logInError = true;
                    $scope.resetForm();
                    // error
                });
        };

        $scope.resetForm = function() {
            $scope.logInForm.email = '';
            $scope.logInForm.password = '';
        }

        $scope.$on('$viewContentLoaded', function() {
            defaultNavbar();
        });
    }]);

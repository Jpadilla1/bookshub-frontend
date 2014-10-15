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
    .controller('LogInCtrl', function($scope) {
        $scope.email = '';
        $scope.password = '';
        
        $scope.$on('$viewContentLoaded', function() {
            document.getElementById("primaryNav").style.backgroundColor = "rgba(0, 0, 0, 0.74)";
        });

        $scope.submit = function() {
            //Here we send data to back end
            alert("Hola");
        }
    });

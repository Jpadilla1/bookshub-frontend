'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:ForgotPasswordCtrl
 * @description
 * # ForgotPasswordCtrl
 * Controller of the hubAppApp
 */

angular.module('hubAppApp')
    .controller('ForgotPasswordCtrl', function($scope) {

        $scope.forgotPasswordForm = { 
            "email": ''
        };
        
        $scope.submit = function() {
            //Here we send data to back end
            console.log($scope.forgotPasswordForm);
        }

        $scope.$on('$viewContentLoaded', function() {
            document.getElementById("primaryNav").style.backgroundColor = "rgba(0, 0, 0, 0.74)";
        });
    });

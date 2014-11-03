'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:ForgotPasswordCtrl
 * @description
 * # ForgotPasswordCtrl
 * Controller of the hubAppApp
 */

angular.module('hubAppApp')
    .controller('ForgotPasswordCtrl',
        ['$scope', 'authService', function($scope, authService) {

        $scope.forgotPasswordForm = {
            "email": ''
        };

        $scope.submit = function() {
            //Here we send data to back end
            console.log($scope.forgotPasswordForm);
            authService.forgotPassword($scope.forgotPasswordForm.email)
                .then(function(data) {
                    // success
                    console.log(data);
                }, function(data) {
                    // error
                    console.log(data);
                });
        };

        $scope.$on('$viewContentLoaded', function() {
            defaultNavbar();
        });
    }]);

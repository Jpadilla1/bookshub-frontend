'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the hubAppApp
 */

angular.module('hubAppApp')
    .controller('ResetPasswordCtrl', function($scope) {

        $scope.newPassword = '';
        $scope.reTypedPassword = '';

        $scope.submit = function() {
            console.log($scope.newPassword);
            console.log($scope.reTypedPassword);
        }

        $scope.$on('$viewContentLoaded', function() {
            defaultNavbar();
        });
    });

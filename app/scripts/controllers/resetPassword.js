'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the hubAppApp
 */

angular.module('hubAppApp')
    .controller('ResetPasswordCtrl',
        ['$scope', '$location', 'authService', function($scope, $location, authService) {

        $scope.newPassword = '';
        $scope.reTypedPassword = '';

        $scope.submit = function() {
            console.log($scope.newPassword);
            console.log($scope.reTypedPassword);
            if ($scope.newPassword === $scope.reTypedPassword) {
                authService.resetPassword($scope.newPassword, $scope.token);
            }
        };

        $scope.$on('$viewContentLoaded', function() {
            defaultNavbar();
        });

        var init = function() {
            $scope.token = $location.search().token;
            if (!$scope.token) {
                $location.path("/");
            }
        };

        init();
    }]);

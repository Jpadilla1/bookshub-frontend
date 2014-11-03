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
            document.getElementById("primary-nav").style.backgroundColor = "rgba(0, 0, 0, 0.74)";
            document.getElementById("brand-logo").src = "../images/logo.png";
        });

        var init = function() {
            $scope.token = $location.search().token;
            if (!$scope.token) {
                $location.path("/");
            }
        };

        init();
    }]);

'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller(
    'MainCtrl', ['$scope', 'authService', function ($scope, authService) {
        $scope.signup = function() {
            authService.signup(
                $scope.user.username,
                $scope.user.email,
                'educational',
                $scope.user.firstName,
                $scope.user.lastName,
                'student',
                '123-4567',
                $scope.user.password1
                ).then(function(data){
                    // success
                    console.log(data);
                }, function(data){
                    // fail
                    console.log(data);
                });
        };

        var init = function(){
            $scope.user = {};
        };
        init();
  }]);




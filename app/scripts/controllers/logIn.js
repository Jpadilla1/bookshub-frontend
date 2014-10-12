'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:LogInCtrl
 * @description
 * # LogInCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp')
    .controller('LogInCtrl', function($scope) {
        $scope.email = '';
        $scope.password = '';
    });

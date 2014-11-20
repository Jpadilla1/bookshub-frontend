'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:404Ctrl
 * @description
 * # 404Ctrl
 * Controller of the hubAppApp
 */

angular.module('hubAppApp')
    .controller('404Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.$on('$viewContentLoaded', function(event) {
            $rootScope.is404Page = true;
        });
        $scope.$on('$destroy', function() {
            $rootScope.is404Page = false;
        });
    }]);

'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp')
    .controller('AboutCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        
        $scope.$on('$viewContentLoaded', function() {
            document.getElementById("primaryNav").style.backgroundColor = "rgba(0, 0, 0, 0.74)";
        });
    });

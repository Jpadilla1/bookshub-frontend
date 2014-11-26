'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:ShowAllUsersCtrl
 * @description
 * # ShowAllUsersCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp')
    .controller('ShowAllUsersCtrl', function($scope) {
        
        
        $scope.$on('$viewContentLoaded', function() {
            defaultNavbar();
        });
    });

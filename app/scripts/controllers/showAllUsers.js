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

        $scope.searchInput;
        $scope.results = [{
            'name': "Juan",
            'description': "Baila tu cuerpo alegria macarena, alegria cosa buena, ehhhhh macarena!!"
        }, {
            'name': "Pedro",
            'description': "Baila tu cuerpo alegria macarena, alegria cosa buena, ehhhhh macarena!!"

        }, {
            'name': "Maria",
            'description': "Baila tu cuerpo alegria macarena, alegria cosa buena, ehhhhh macarena!!"
        }, {
            'name': "Jose",
            'description': "Baila tu cuerpo alegria macarena, alegria cosa buena, ehhhhh macarena!!"
        }, {
            'name': "Emmanuel",
            'description': "Baila tu cuerpo alegria macarena, alegria cosa buena, ehhhhh macarena!!"
        }];

        $scope.getAllUsers = function() {
            
        }

        $scope.$on('$viewContentLoaded', function() {
            defaultNavbar();
        });
    });

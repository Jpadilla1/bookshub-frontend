'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hubAppApp
 */


var app = angular.module('hubAppApp');

app.controller('SettingsCtrl', function($scope) {
      
      $scope.tabs = {
        "showUserInformation": true,
        "showBookInformation": false
      
    };

     $scope.showUserInformation = function() {
        $scope.tabs.showUserInformation = true;
        $scope.tabs.showBookInformation = false;
        
    }

     $scope.showBookInformation = function() {
        $scope.tabs.showBookInformation = true;
         $scope.tabs.showUserInformation = false;
    }


 $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });


        ];

     
    });

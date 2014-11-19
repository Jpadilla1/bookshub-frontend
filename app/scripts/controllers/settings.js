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
      
      
      

     $scope.showUserInformation1 = function() {
      console.log("hi");
        $scope.showUserInformation = true;
        $scope.showBookInformation = false;
        
    };

     $scope.showBookInformation1 = function() {
        $scope.showBookInformation = true;
         $scope.showUserInformation = false;
    };

    var init = function() {
      $scope.showUserInformation = true;
      $scope.showBookInformation = false;
    }


 $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });


      
      init();
     
    });

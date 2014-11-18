'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */


var app = angular.module('hubAppApp');

app.controller('RequestCtrl', 
    ['$rootScope', '$scope', 'authService', 'MyContactService', 'UserService',
     'MyOfferService', 'MyBookService', 
     function($rootScope, $scope, authService, MyContactService,
        UserService, MyOfferService, MyBookService) {


    $scope.AllRequested = true;
    $scope.TopRequested = false;

    $scope.showAllRequested = function() {

        $scope.result = MyBookService.booksRequested.get();

           console.log($scope.result);
};
        
    $scope.showTopRequested = function() {

         $scope.topRequested = MyBookService.topRequested.get();

        $scope.AllRequested = false;
        $scope.TopRequested = true;
    
    };
    
    $scope.showAllRequested();

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });
}]);

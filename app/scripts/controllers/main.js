'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('MainCtrl', function($scope) {

    $scope.basicForm = {
    	"username": '',
    	"firstName": '',
    	"lastName": '',
    	"email": '',
    	"password": '',
    	"retypedPassword": ''
    };

    $scope.studentForm = {
    	"city": '',
    	"state": '',
    	"zipCode": '',
    	"facebook": '',
    	"twitter": '',
    	"googleId": '',
    	"gravatar": '',
    	"institution": '',
    	"department": ''
    };

    $scope.userForm = {
    	"title": '',
    	"city": '',
    	"state": '',
    	"zipCode": '',
    	"facebook": '',
    	"twitter": '',
    	"googleId": '',
    	"gravatar": ''
    };
    
    $scope.submit = function() {
    	console.log($scope.basicForm);
    	console.log($scope.studentForm);
    	console.log($scope.userForm);
    }
    $scope.$on('$viewContentLoaded', function() {
        document.getElementById("primaryNav").style.backgroundColor = "rgba(0, 0, 0, 0.74)";
    });
});

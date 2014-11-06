'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:BookCtrl
 * @description
 * # BookProfileCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');


app.controller('bookProfileCtrl', ['$scope', '$http', 'MyBookService', function($scope, $http, MyBookService){
    var result;

    MyBookService.async($http).then(function(response) {
        result = result;
    });

    $scope.bookInformation = result;

    $scope.vendorInformation = {
        "vendor": 'Luis N. Valcourt',
        "rating": '4.9',
        "address": 'Puerto Rico',
        "description": 'Book in excellent condition.'

    };

    $scope.offerInformation = {
        "quantity": '2',
        "new": '15',
        "used": '3'
    };

    $scope.tabs = {
        "showNew": false,
        "showUsed": false,
        "showReview": true
    };

    $scope.showNew = function() {
        $scope.tabs.showNew = true;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
    }

    $scope.showUsed = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = true;
        $scope.tabs.showReview = false;
    }

    $scope.showReview = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = true;
    }

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });
}]);

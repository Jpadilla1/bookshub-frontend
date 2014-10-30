'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:BookCtrl
 * @description
 * # BookProfileCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('bookProfileCtrl', function($scope) {


    $scope.bookInformation = {

        "title": 'Harry Potter - Eat You Alive',
        "author": 'Howard T. James',
        "isbn": '012345667890',
        "rating": '5.0',
        "publisher": 'Warner Brothers',
        "edition": '10th edition',
        "price": '$249.99',
        "reviews": '',

        "recomendation": ''

    };

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
        []
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
});

$scope.$on('$viewContentLoaded', function() {
    document.getElementById("primary-nav").style.backgroundColor = "rgba(0, 0, 0, 0.74)";
    document.getElementById("brand-logo").src = "../images/logo.png";
});

'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:BookCtrl
 * @description
 * # BookProfileCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');


app.controller('bookProfileCtrl', ['$scope', '$resource', 'MyBookService', 'MyOfferService',
    function($scope, $resource, MyBookService, MyOfferService){
    var result;

    $scope.test = {
        "bookId": '1'
    };

    var params = {'bookId': $scope.test.bookId};
    var paramTest = {'offerId': 2};

    console.log(MyBookService.specificBook.get(params));
    console.log(MyBookService.bookReviews.get(params));
    console.log(MyOfferService.bookOffer.get(paramTest));

    $scope.bookInformation = MyBookService.specificBook.get(params);

    $scope.bookReviews = MyBookService.bookReviews.get(params);


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

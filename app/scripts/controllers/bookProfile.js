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
    
    var params = {
        "bookId": ''
    };

    $scope.bookInformation = '';
    $scope.bookReviews = '';

    if(MyBookService.bookId){
        params.bookId = MyBookService.bookId;

        $scope.bookInformation = MyBookService.specificBook.get(params);

        $scope.$watch('bookInformation.id', function(){
            //fix the reviews, it's getting every review in the database.
            $scope.bookReviews = MyBookService.bookReviews.get(params);
        });
    }else{
        //do something else
    }


    $scope.tabs = {
        "showNew": false,
        "showUsed": false,
        "showReview": true,
        "showOffers": false
    };

    $scope.showNew = function() {
        $scope.tabs.showNew = true;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
    };

    $scope.showUsed = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = true;
        $scope.tabs.showReview = false;
    };

    $scope.showReview = function() {
        $scope.tabs.showOffers = false;        
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = true;
    };

    $scope.showOffers = function(){
        $scope.tabs.showOffers = true;
        $scope.tabs.showNew = true;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
    };

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });
}]);

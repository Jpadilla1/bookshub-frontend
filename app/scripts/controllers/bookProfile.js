'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:BookCtrl
 * @description
 * # BookProfileCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');


app.controller('bookProfileCtrl', ['$scope', '$resource', 'MyBookService', 'MyOfferService', 'UserService',
    function($scope, $resource, MyBookService, MyOfferService, UserService){
    
    var params = {
        "bookId": ''
    };

    $scope.bookInformation = '';
    $scope.bookReviews = '';

    if(MyBookService.bookId){
        params.bookId = MyBookService.bookId;

        $scope.bookInformation = MyBookService.specificBook.get(params);

        $scope.$watch('bookInformation.id', function(){
            MyBookService.bookReviews.get(params).$promise.then(function(data){
                angular.forEach(data.results, function(item){
                    var paramsUser = {
                        "userId": item.user
                    };

                    UserService.specificProfile.get(paramsUser).$promise.then(function(data){
                        item.userInformation = data;
                    });
                });

                $scope.bookReviews = data;
                console.log($scope.bookReviews);
            });
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

    $scope.goToReviewer = function(userId){
        UserService.setUserId(userId);
    };

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });
}]);

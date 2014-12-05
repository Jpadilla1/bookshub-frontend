'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:BookCtrl
 * @description
 * # BookProfileCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');


app.controller('bookProfileCtrl', ['$scope', '$resource', 'MyBookService', 'MyOfferService', 'UserService','authService', 'CartService',
    function($scope, $resource, MyBookService, MyOfferService, UserService,authService, CartService){
    
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


    $scope.addDataCart = {
        'user': '',
        'offer': '',
        'is_purchased': false,
        'quantity': ''
    };

  $scope.addOfferData = {
        'user': '',
        'offer': '',
        'is_purchased': false,
        'quantity': ''
    };

    $scope.cartNewSuccess = '';
    $scope.cartNewError = '';
    $scope.cartUsedSuccess = '';
    $scope.cartUsedError = '';


    $scope.addToCart = function(offerId, condition){
        $scope.addOfferData.quantity = 0;

            authService.settings().then(function(data){
                $scope.addOfferData.user = data.id;
            })
        
        $scope.addOfferData.offer = offerId;
        $scope.addOfferData.quantity = $('#' + offerId).val();

        if($scope.addOfferData.quantity != undefined && $scope.addOfferData.quantity > 0){
            CartService.cart.save('', $scope.addOfferData).$promise.then(function(data){
                if(condition.toLowerCase() == 'new'){
                    $scope.cartNewSuccess = true;
                    $scope.cartNewError = false;
                }else{
                    $scope.cartUsedSuccess = true;
                    $scope.cartUsedError = false;
                };
            });
        }else{
            if (condition.toLowerCase() == 'new') {
                $scope.cartNewError = true;
                $scope.cartNewSuccess = false;
            }else{
                $scope.cartUsedError = true;
                $scope.cartUsedSuccess = false;
            };
        }


    };


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

        $scope.addAndRemoveActive('book-profile-used', 'book-profile-new');
    };

    $scope.showUsed = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = true;
        $scope.tabs.showReview = false;

        $scope.addAndRemoveActive('book-profile-new', 'book-profile-used');
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

    $scope.addAndRemoveActive = function(removeId, addId){
        $('#' + removeId).removeClass('active');
        if(!$('#' + addId).hasClass('active')){
            $('#' + addId).addClass('active');
        }
    };
}]);

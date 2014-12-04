'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');

app.controller('UserCtrl', ['$rootScope', '$scope', 'authService', 'MyContactService', 'UserService', 'MyOfferService', 'MyBookService', function($rootScope, $scope, authService, MyContactService, UserService, MyOfferService, MyBookService) {
    $scope.tabs = {
        "showNew": false,
        "showUsed": false,
        "showReview": true,
        "showInformation": true,
        "showOffers": false,
        "showAllOffers": false,
        "offersNavbar": false
    };

    $scope.showNew = function() {
        $scope.tabs.showNew = true;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
        $scope.tabs.offersNavbar = true;

        $scope.addAndRemoveActive('user-profile-used', 'user-profile-new');   
    };

    $scope.showUsed = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = true;
        $scope.tabs.showReview = false;
        $scope.tabs.offersNavbar = true;

        $scope.addAndRemoveActive('user-profile-new', 'user-profile-used');
    };

    $scope.showReviews = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = true;
        $scope.tabs.offersNavbar = false;

        $scope.addAndRemoveActive('side-offers', 'side-review');
    };

    $scope.showOffers = function() {
        $scope.tabs.showNew = true;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
        $scope.tabs.showRating = false;
        $scope.tabs.showAllOffers = true;
        $scope.tabs.offersNavbar = true;

        $scope.addAndRemoveActive('side-review', 'side-offers');
        $scope.addAndRemoveActive('user-profile-used', 'user-profile-new');
    };

    $scope.userProfile = '';

    $scope.currentUserInformation = '';

    $scope.userReviews = '';

    $scope.offers = '';

    $scope.bookInformation = '';

    authService.settings().then(function(data) {
        $scope.currentUserInformation = data;
        $scope.addReviewData();
        $scope.addOfferData();
    });

    $scope.addReviewData = function() {
        var params = {
            'userId': $scope.currentUserInformation.id
        };

        $scope.userReviews = UserService.userReview.get(params);
        console.log($scope.userReviews);
    };

    $scope.addOfferData = function(){
        var offerParams = {
            'ownerId': $scope.currentUserInformation.id
        };

        $scope.offers = MyOfferService.userOffers.get(offerParams);

        console.log($scope.offers);
    };

    $scope.submitReview = function() {
        $scope.newReview.created_by = $scope.newReview.user_id = $scope.userProfile.id;
        $scope.owner = '3';
        UserService.userReview.save('', $scope.newReview);
    };

    $scope.goToOtherUser = function(userId){
        UserService.setUserId(userId);
    };

    $scope.goToBook = function(bookId){
        MyBookService.bookId = bookId;
    }

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });

    $scope.addAndRemoveActive = function(removeId, addId){
        // alert('hello new');
        $('#' + removeId).removeClass('active');
        // alert($('#' + addId).hasClass('active'));
        if(!$('#' + addId).hasClass('active')){
            $('#' + addId).addClass('active');
            // alert($('#' + addId).hasClass('active'));
        }
    };
}]);

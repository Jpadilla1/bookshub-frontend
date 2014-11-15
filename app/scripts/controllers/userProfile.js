'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');

app.controller('UserCtrl', ['$scope', 'authService', 'MyContactService', 'UserService', 'MyOfferService', 'MyBookService', function($scope, authService, MyContactService, UserService, MyOfferService, MyBookService) {
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
        $scope.tabs.showContactForm = false;
        $scope.tabs.showInformation = true;
        $scope.tabs.showRating = true;
        $scope.tabs.showReviewForm = false;
        $scope.tabs.offersNavbar = true;
    }

    $scope.showUsed = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = true;
        $scope.tabs.showRating = true;
        $scope.tabs.showReview = false;
        $scope.tabs.showContactForm = false;
        $scope.tabs.showInformation = true;
        $scope.tabs.showReviewForm = false;
        $scope.tabs.offersNavbar = true;
    }

    $scope.showReview = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = true;
        $scope.tabs.showRating = true;
        $scope.tabs.offersNavbar = false;
    }

    $scope.showOffers = function() {
        $scope.tabs.showNew = true;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
        $scope.tabs.showRating = false;
        $scope.tabs.showAllOffers = true;
        $scope.tabs.offersNavbar = true;
    }

    $scope.showReviews = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = true;
        $scope.tabs.showRating = false;
        $scope.tabs.showContactForm = false;
        $scope.tabs.showInformation = false;
        $scope.tabs.offersNavbar = false;
    }

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

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });
}]);

'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');

<<<<<<< HEAD
app.controller('RequestCtrl', ['$scope', 'MyBookService', function($scope, MyBookService) {

=======
app.controller('RequestCtrl', 
    ['$rootScope', '$scope', 'authService', 'MyContactService', 'UserService',
     'MyOfferService', 'MyBookService', 
     function($rootScope, $scope, authService, MyContactService,
        UserService, MyOfferService, MyBookService) {
>>>>>>> FETCH_HEAD

    $scope.AllRequested = true;
    $scope.TopRequested = false;

    $scope.showAllRequested = function() {

        $scope.result = MyBookService.booksRequested.get();
<<<<<<< HEAD
           console.log($scope.result);

        

=======
        
>>>>>>> FETCH_HEAD
        $scope.AllRequested = true;
        $scope.TopRequested = false;
    };

    $scope.showTopRequested = function() {

<<<<<<< HEAD
         $scope.topRequested = MyBookService.topRequested.get();

        $scope.AllRequested = false;
        $scope.TopRequested = true;


=======
        $scope.topRequested = MyBookService.topRequested.get();

        $scope.AllRequested = false;
        $scope.TopRequested = true;
>>>>>>> FETCH_HEAD
    
    };
    
    $scope.showAllRequested();
<<<<<<< HEAD


      $scope.$on('$viewContentLoaded', function() {
=======
    
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

    $scope.goToOtherUser = function(userId){
        UserService.setUserId(userId);
    };

    $scope.$on('$viewContentLoaded', function() {
>>>>>>> FETCH_HEAD
        defaultNavbar();
    });
}]);

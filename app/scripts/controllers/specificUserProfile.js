'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */

 var app = angular.module('hubAppApp');

 app.controller('SpecificUserCtrl', ['$scope', 'authService', 'UserService', 'MyOfferService', function($scope, authService, UserService, MyOfferService){
    $scope.tabs = {
        "showNew": false,
        "showUsed": false,
        "showReview": true,
        "showContactForm": false,
        "showReviewForm": false,
        "showReportForm": false,
        "showRating": true,
        "showInformation": true,
    };

     $scope.showInformation = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = true;
        $scope.tabs.showRating = true;
        $scope.tabs.showInformation = true
        $scope.tabs.showContactForm = false;
        $scope.tabs.showReviewForm = false;
        $scope.tabs.showReportForm = false;
    }


    $scope.showRating = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = true;
        $scope.tabs.showRating = false;
        $scope.tabs.showContactForm = false;
        $scope.tabs.showInformation = true;
        $scope.tabs.showReviewForm = false;
        $scope.tabs.showReportForm = false;
    }

    $scope.showNew = function() {
        $scope.tabs.showNew = true;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
        $scope.tabs.showContactForm = false;
        $scope.tabs.showInformation = true;
        $scope.tabs.showRating = true;
        $scope.tabs.showReviewForm = false;
        $scope.tabs.showReportForm = false;
    }

    $scope.showUsed = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = true;
        $scope.tabs.showRating = true;
        $scope.tabs.showReview = false;
        $scope.tabs.showContactForm = false;
        $scope.tabs.showInformation = true;
        $scope.tabs.showReviewForm = false;
        $scope.tabs.showReportForm = false;
    }

    $scope.showReview = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = true;
        $scope.tabs.showContactForm = false;
        $scope.tabs.showInformation = true;
        $scope.tabs.showRating = true;
        $scope.tabs.showReviewForm = false;
        $scope.tabs.showReportForm = false;
    }

    $scope.showContactForm = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
        $scope.tabs.showRating = false;
        $scope.tabs.showContactForm = true;
        $scope.tabs.showInformation = false;
        $scope.tabs.showReviewForm = false;
        $scope.tabs.showReportForm = false;
    }
    $scope.showReviewForm = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
        $scope.tabs.showRating = false;
        $scope.tabs.showContactForm = false;
        $scope.tabs.showInformation = false;
        $scope.tabs.showReviewForm = true;
        $scope.tabs.showReportForm = false;
    }
    $scope.showReportForm = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
        $scope.tabs.showRating = false;
        $scope.tabs.showContactForm = false;
        $scope.tabs.showInformation = false;
        $scope.tabs.showReviewForm = false;
        $scope.tabs.showReportForm = true;
    }

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });

    $scope.profileData = '';
    $scope.profileReviews = '';
    $scope.profileOffers = '';
    var params = {
        "userId": '',
        "ownerId": ''
    };

    if(UserService.userId){
        params.userId = UserService.userId;
        params.ownerId = UserService.userId;

        $scope.profileData = UserService.specificProfile.get(params);

        $scope.$watch('profileData.id', function(){
            $scope.profileReviews = UserService.userReview.get(params);
            $scope.profileOffers = MyOfferService.userOffers.get(params);
            console.log($scope.profileData);
            console.log($scope.profileOffers);
        });
    }else{
        //send to another place
    }

    $scope.reviewData = {
        "user_id": '',
        "created_by": '',
        "owner": '',
        "score": '',
        "text": ''
    };

    $scope.submitReview = function(){
        authService.settings().then(function(data){
            $scope.reviewData.created_by = data.id;
            $scope.reviewData.user_id = $scope.profileData.id;
            $scope.reviewData.owner = $scope.profileData.id;
            UserService.userReview.save(params, $scope.reviewData);

            //make something to do the review section refresh it's data after post
        });
    };

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

    $scope.userInformation = {
        "user": 'Howard T. James',
        "rating": '5.0',
        "review": 'Nice Seller, recommended with eyes closed!',
        "type": 'Seller',
        "facebook_url": 'www.facebook.com',
        "twitter_url": '',
        "github_url": ''
        
    };

    $scope.userBook = {
        "quantity": '15',
        "new": '10',
        "used": '5' 

    };

    $scope.offerInformation = {
        "quantity": '2',
        "new": '15',
        "used": '3'
    };

    // $scope.addReviewData = function(id) {
    //     var params = {
    //         'userId': id
    //     };

    //     $scope.userReviews = UserService.userReview.get(params);
    // };

    // $scope.specificUser = function(userId) {
    //     var result = validateField(userId);

    //     if (result) {
    //         params = {
    //             "userId": result
    //         };

    //         $scope.userProfile = UserService.specificProfile.get(params);

    //         $scope.$watch('userProfile.id', function(){
    //             $scope.addReviewData($scope.userProfile.id);
    //         });
    //     }
    // };
 }]);
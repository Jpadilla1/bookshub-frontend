'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */

 var app = angular.module('hubAppApp');

 app.controller('SpecificUserCtrl', ['$scope', 'authService', 'UserService', 'MyOfferService', 'ReportService', function($scope, authService, UserService, MyOfferService, ReportService){
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

    $scope.userReviewData = {
        "user_id": '',
        "created_by": '',
        "owner": '',
        "score": '',
        "text": ''
    };

    $scope.loggedInUserData = '';

    $scope.submitUserReview = function(){

        if($scope.loggedInUserData){
            $scope.userReviewData.created_by = $scope.loggedInUserData.id;
        }else{
            authService.settings().then(function(data){
                $scope.loggedInUserData = data;
                $scope.userReviewData.created_by = data.id;
            });   
        }

        $scope.userReviewData.user_id = $scope.profileData.id;
        $scope.userReviewData.owner = $scope.profileData.id;
        UserService.userReview.save(params, $scope.userReviewData);

        //make something to do the review section refresh it's data after post
        //show success message
    };

    $scope.userReportData = {
        receiver: '',
        reason: '',
        sender: []
    }

    $scope.submitUserReport = function(){
        if($scope.loggedInUserData){
            $scope.userReportData.sender.push($scope.loggedInUserData.id);
        }else{
            authService.settings().then(function(data){
                $scope.loggedInUserData = data;
                $scope.userReportData.sender.push(data.id);
            });
        }

        console.log($scope.userReportData);
        $scope.userReportData.receiver = $scope.profileData.id;
        ReportService.userReport.save('', $scope.userReportData);
        //show success message
    };
 }]);
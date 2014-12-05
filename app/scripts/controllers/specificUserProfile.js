'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */

 var app = angular.module('hubAppApp');

 app.controller('SpecificUserCtrl', ['$scope', 'authService', 'UserService', 'MyOfferService', 'ReportService', 'MyBookService', 'CartService', 
    function($scope, authService, UserService, MyOfferService, ReportService, MyBookService, CartService){
    $scope.tabs = {
        "showNew": false,
        "showUsed": false,
        "showReview": true,
        "showReviewForm": false,
        "showReportForm": false,
    };

    $scope.showNew = function() {
        $scope.tabs.showNew = true;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
        $scope.tabs.showReviewForm = false;
        $scope.tabs.showReportForm = false;

        $scope.addAndRemoveActive('show-user-reviews', 'show-new-books');
        $scope.addAndRemoveActive('show-used-books', 'show-new-books');
    };   

    $scope.showUsed = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = true;
        $scope.tabs.showReview = false;
        $scope.tabs.showReviewForm = false;
        $scope.tabs.showReportForm = false;

        $scope.addAndRemoveActive('show-new-books', 'show-used-books');
        $scope.addAndRemoveActive('show-user-reviews', 'show-used-books');
    };

    $scope.showReview = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = true;
        $scope.tabs.showReviewForm = false;
        $scope.tabs.showReportForm = false;

        $scope.addAndRemoveActive('show-new-books', 'show-user-reviews');
        $scope.addAndRemoveActive('show-used-books', 'show-user-reviews');

    };

    $scope.showReviewForm = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
        $scope.tabs.showReviewForm = true;
        $scope.tabs.showReportForm = false;

        $scope.addAndRemoveActive('side-report', 'side-review');
    };
    $scope.showReportForm = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
        $scope.tabs.showReviewForm = false;
        $scope.tabs.showReportForm = true;

        $scope.addAndRemoveActive('side-review', 'side-report');
    };

    $scope.profileData = '';
    $scope.profileReviews = '';
    $scope.profileOffers = '';
    var paramsUser = {
        "userId": ''
    };

    var paramsOwner = {
        "ownerId": ''
    };

    if(UserService.userId){
        paramsUser.userId = UserService.userId;
        paramsOwner.ownerId = UserService.userId;

        $scope.profileData = UserService.specificProfile.get(paramsUser);

        $scope.$watch('profileData.id', function(){
            $scope.profileReviews = UserService.userReview.get(paramsUser);
            $scope.profileOffers = MyOfferService.userOffers.get(paramsOwner);
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

    $scope.reviewSuccess = '';
    $scope.reviewError = '';

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
        console.log($scope.userReviewData); 
        UserService.userReview.save(paramsUser, $scope.userReviewData).$promise.then(function(data){
            $scope.reviewSuccess = true;
            $scope.reviewError = false;            
        }, function(data){
            $scope.reviewError = true;
            $scope.reviewSuccess = false;
        });

        //make something to do the review section refresh it's data after post
        //show success message
    };

    $scope.userReportData = {
        receiver: '',
        reason: '',
        sender: []
    }

    $scope.reportSuccess = '';
    $scope.reportError = '';

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
        ReportService.userReport.save('', $scope.userReportData).$promise.then(function(data){
            $scope.reportSuccess = true;
            $scope.reportError = false;
        }, function(data){
            $scope.reportError = true;
            $scope.reportSuccess = false;
        });
        //show success message
    };

    $scope.goToBookInfo = function(bookId){
        MyBookService.bookId = bookId;
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
        if($scope.loggedInUserData){
            $scope.addOfferData.user = $scope.loggedInUserData.id;
        }else{
            authService.settings().then(function(data){
                $scope.loggedInUserData = data;
                $scope.addOfferData.user = data.id;
            });
        }
        $scope.addOfferData.offer = offerId;
        $scope.addOfferData.quantity = $('#' + offerId).val();
        alert(condition);
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
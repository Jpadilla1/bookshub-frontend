'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');

app.controller('UserCtrl', ['$scope', 'authService', 'MyContactService', 'UserReviewService', function($scope, authService, MyContactService, UserReviewService){
    $scope.userInformation = '';
    $scope.userReviews = '';

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

    $scope.newReview = {
        "created_by": '',
        "rate": '',
        "text": '',
        "owner": '',
        "user_id": ''
    };


    authService.settings().then(function(data){
        $scope.userInformation = data;
        $scope.addReviewData();
    });

    $scope.addReviewData = function(){
        var params = {
            'userId': $scope.userInformation.id
        };

        $scope.userReviews = UserReviewService.userReview.get(params);
    };

    $scope.submitReview = function(){
        $scope.newReview.created_by = $scope.newReview.user_id = $scope.userInformation.id;
        $scope.owner = '3';
        UserReviewService.userReview.save('', $scope.newReview);
    }

    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });

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
}]);
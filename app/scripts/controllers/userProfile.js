'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('UserCtrl',
    ['$scope', 'authService', function($scope, authService) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });

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

    $scope.userReview = {

    	"user": 'Emmanuel Cleaveland',
    	"quantity": '1'

    };

    $scope.tabs = {
        "showNew": false,
        "showUsed": false,
        "showReview": true,
        "showContactForm": false,
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
  
    }


    $scope.showRating = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = true;
        $scope.tabs.showRating = false;
        $scope.tabs.showContactForm = false;
        $scope.tabs.showInformation = true;
  
    }

    $scope.showNew = function() {
        $scope.tabs.showNew = true;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
        $scope.tabs.showContactForm = false;
        $scope.tabs.showInformation = true;
        $scope.tabs.showRating = true;
    }

    $scope.showUsed = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = true;
        $scope.tabs.showRating = true;
        $scope.tabs.showReview = false;
        $scope.tabs.showContactForm = false;
        $scope.tabs.showInformation = true;
    }

    $scope.showReview = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = true;
        $scope.tabs.showContactForm = false;
        $scope.tabs.showInformation = true;
        $scope.tabs.showRating = true;
    }

    $scope.showContactForm = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = true;
        $scope.tabs.showRating = false;
        $scope.tabs.showContactForm = true;
        $scope.tabs.showInformation = false;
  
    }

    var init = function() {
        console.log(authService.settings());
    };

    init();
}]);
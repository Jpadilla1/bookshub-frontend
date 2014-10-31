'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('UserCtrl', function($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.$on('$viewContentLoaded', function() {
        document.getElementById("primary-nav").style.backgroundColor = "rgba(0, 0, 0, 0.74)";
        document.getElementById("brand-logo").src = "../images/logo.png";
    });


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
        $scope.tabs.showNew = true;[]
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = false;
        $scope.tabs.showContactForm = false;
         $scope.tabs.showInformation = true;
    }

    $scope.showUsed = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = true;
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
    }

    $scope.showContactForm = function() {
        $scope.tabs.showNew = false;
        $scope.tabs.showUsed = false;
        $scope.tabs.showReview = true;
        $scope.tabs.showRating = false;
        $scope.tabs.showContactForm = true;
        $scope.tabs.showInformation = false;
  
    }





    
});

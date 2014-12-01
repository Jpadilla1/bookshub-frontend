'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');

app.controller('SettingsCtrl', ['$scope', 'MyOfferService', 'authService', function($scope, MyOfferService, authService) {
  $scope.tabs = {
    "showUserInformation": true,
    "showOffers": false,
    "editOffer": false
  };

  $scope.userOffers = '';
  $scope.userData = ''; 
  $scope.offerEdit = {
    'description': '',
    'condition': '',
    'price': '',
    'quantity': ''
  };

  authService.settings().then(function(data){
    $scope.userData = data;
  });

  $scope.showPersonalInformation = function() {
    $scope.tabs.showUserInformation = true;
    $scope.tabs.showOffers = false;

    if(!($('#settings-personal').hasClass('active'))){
      $('#settings-personal').addClass('active');
      $('#settings-offers').removeClass('active');
    }
  };

  $scope.showOffersInformation = function() {
    $scope.tabs.showUserInformation = false;
    $scope.tabs.showOffers = true;

    if(!($('#settings-offers').hasClass('active'))){
      $('#settings-offers').addClass('active');
      $('#settings-personal').removeClass('active');
    }

    var params = {
      "ownerId": $scope.userData.id
    };

    MyOfferService.userOffers.get(params).$promise.then(function(data){
      $scope.userOffers = data;
      console.log($scope.userOffers);
    });
  };

  $scope.showEditOfferForm = function(id){
    var params = {
      'offerId': id,
    };

    MyOfferService.bookOffer.get(params).$promise.then(function(data){
      console.log(data);
      $scope.offerEdit.description = data.description;
      $scope.offerEdit.condition = data.condition;
      $scope.offerEdit.price = data.price;
      $scope.offerEdit.quantity = data.quantity;
      console.log($scope.offerEdit);
    });

    $scope.tabs.editOffer = true;
  };

 $scope.$on('$viewContentLoaded', function() {
    defaultNavbar();
  });
}]);
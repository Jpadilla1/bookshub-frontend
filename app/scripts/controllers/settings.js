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

  $scope.disabledFields = true;
  $scope.userOffers = '';
  $scope.userData = ''; 
  $scope.offerEdit = '';
  $scope.personalResultSuccess;
  $scope.personalResultFail;
  $scope.offerResultSuccess;
  $scope.offerResultFail;

  authService.settings().then(function(data){
    $scope.userData = data;
    console.log($scope.userData);
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

  $scope.savePersonalChanges = function(){
    console.log($scope.userData);
    authService.updateSettings($scope.userData).then(function(data){
      console.log(data);
      $scope.personalResultSuccess = true;
      $scope.personalResultFail = false;
    }, function(){
      $scope.personalResultFail = true;
      $scope.personalResultSuccess = false;
    });
  };

  $scope.saveOfferChanges = function(id){
    var params = {
      "offerId": id
    };

    MyOfferService.bookOffer.patch(params, $scope.offerEdit).$promise.then(function(data){
      $scope.offerResultSuccess = true;
      $scope.offerResultFail = false;
    }, function(){
      $scope.offerResultFail = true;
      $scope.offerResultSuccess = false;
    });
  };

  $scope.showEditOfferForm = function(id){
    var params = {
      'offerId': id,
    };

    MyOfferService.bookOffer.get(params).$promise.then(function(data){
      $scope.offerEdit = data;
    });

    $scope.tabs.editOffer = true;
  };

 $scope.$on('$viewContentLoaded', function() {
    defaultNavbar();
  });
}]);
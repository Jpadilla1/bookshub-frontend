'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp')
    .controller('SignUpCtrl', ['$scope', 'authService', '$location', '$timeout', '$cookies', function($scope, authService, $location, $timeout, $cookies) {

        $scope.retypedPassword = '';
        $scope.token = '';
        $scope.plan = '';

        $scope.signUpForm = {
            "username": '',
            "first_name": '',
            "last_name": '',
            "email": '',
            "password": '',
            "type": 'standard',
            "phone": '',
            "title": ''
        };

        var originalSignUpForm = angular.copy($scope.signUpForm);

        $scope.settingsForm = {
            "name": '',
            "zip": '',
            "address_1": '',
            "address_2": '',
            "state": '',
            "country": '',
            "city": ''
        };

        $scope.tabs = {
            "showBasicForm": true,
            "showSellerForms": false,
            "showOffers": false
        };

        $scope.showBasicForm = function() {
            $scope.tabs.showBasicForm = true;
            $scope.tabs.showUserForm = false;
            $scope.tabs.showOffers = false;
        }

        $scope.showSellerForms = function() {
            $scope.tabs.showBasicForm = false;
            $scope.tabs.showSellerForms = true;
            $scope.tabs.showOffers = false;
        }

        $scope.showOffers = function() {
            $scope.tabs.showBasicForm = false;
            $scope.tabs.showSellerForms = false;
            $scope.tabs.showOffers = true;
        }

        $scope.SignUpAsSeller = function() {
            console.log($scope.signUpForm);
            authService.signup($scope.signUpForm)
                .then(function(data) {
                    // success
                    $scope.isSignUp = true;
                    $cookies.token = data.token;
                    $scope.tabs.showBasicForm = false;
                    $scope.tabs.showOffers = true;
                }, function(data) {
                    $scope.signUpError = true;
                    $scope.clearSignUpForm();
                    // error
                    console.log(data);
                });
        };

        $scope.SignUpAsBuyer = function() {
            console.log($scope.signUpForm);
            authService.signup($scope.signUpForm)
                .then(function(data) {
                    // success
                    $scope.isSignUp = true;
                    $cookies.token = data.token;
                    $scope.goHome();
                }, function(data) {
                    $scope.signUpError = true;
                    $scope.clearSignUpForm();
                    // error
                    console.log(data);
                });
        };

        $scope.addPlanAndComplete = function(planChoosen) {
            $scope.plan = planChoosen;
            $scope.tabs.showOffers = false;
            $scope.tabs.showSellerForms = true;
        };

        $scope.submitSellerInformation = function() {
            $scope.settingsForm.name = $scope.signUpForm.first_name + " " + $scope.signUpForm.last_name;
            authService.updateSettings($scope.settingsForm);
            $scope.goHome();
        };

        $scope.$on('$viewContentLoaded', function() {
            defaultNavbar();
        });

        $scope.sellerSignSuccess = '';
        $scope.sellerSignError = '';

        //Stripe
        // $scope.token;
        Stripe.setPublishableKey('pk_test_0kdKRntcrHlYsL54QQsSjaXo');

        $scope.stripeSubscribe = function(){
            var $form = $('#checkout-form');

            // Disable the submit button to prevent repeated clicks
            $form.find('button').prop('disabled', true);
            console.log($scope.plan);
            Stripe.createToken($form, stripeResponseHandler);
        };

        var stripeResponseHandler = function(status, response) {
            var $form = $('#checkout-form');
            console.log($scope.plan);
            console.log(response);
            if (response.error) {
                // Show the errors on the form
                $form.find('.payment-errors').text(response.error.message);
                $form.find('.payment-errors').addClass('alert');
                $form.find('.payment-errors').addClass('alert-error');
                $form.find('button').prop('disabled', false);
            } else {
                // token contains id, last4, and card type
                console.log('here');
                $scope.token = response.id;
                authService.stripe($scope.plan, $scope.token).then(function(data){
                    $scope.sellerSignSuccess = true;
                    $scope.sellerSignError = false;
                }, function(data){
                    $scope.sellerSignError = true;
                    $scope.sellerSignSuccess = false;
                });
            }
        };

        $scope.goHome = function(){
            $timeout(function(){
                $location.url('/');
            }, 2500);
        };
    }]);

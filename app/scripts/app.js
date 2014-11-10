'use strict';

/**
* @ngdoc overview
* @name hubAppApp
* @description
* # hubAppApp
*
* Main module of the application.
*/

var app = angular.module('hubAppApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'validation',
  'validation.rule'
 ]);

app.config(function($routeProvider) {

   $routeProvider
     .when('/', {
       templateUrl: 'views/home.html',
       controller: 'HomeCtrl'
     })
     .when('/signUp', {
       templateUrl: 'views/sign-up.html',
       controller: 'SignUpCtrl'
     })
     .when('/about', {
       templateUrl: 'views/about.html',
       controller: 'AboutCtrl'
     })
     .when('/userProfile', {
       templateUrl: 'views/user-profile.html',
       controller: 'UserCtrl'
     })
      .when('/book', {
       templateUrl: 'views/book.html',
       controller: 'BookCtrl'
     })
      .when('/login', {
       templateUrl: 'views/login.html',
       controller: 'LogInCtrl'
     })
      .when('/book-profile', {
      templateUrl: 'views/bookProfile.html',
      controller: 'bookProfileCtrl'
     })
      .when('/forgot-password', {
      templateUrl: 'views/forgotPassword.html',
      controller: 'ForgotPasswordCtrl'
     })
      .when('/reset-password', {
      templateUrl: 'views/resetPassword.html',
      controller: 'ResetPasswordCtrl'
     })
      .when('/cart', {
      templateUrl: 'views/cart.html',
      controller: 'CartCtrl'
     })
     .otherwise({
       redirectTo: '/'
     });
 });

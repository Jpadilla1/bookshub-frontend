'use strict';

/**
* @ngdoc overview
* @name hubAppApp
* @description
* # hubAppApp
*
* Main module of the application.
*/

angular
 .module('hubAppApp', [
   'ngAnimate',
   'ngCookies',
   'ngResource',
   'ngRoute',
   'ngSanitize',
   'ngTouch'
 ])
 
 .config(function($routeProvider) {

   $routeProvider
     .when('/', {
       templateUrl: 'views/home.html',
       controller: 'HomeCtrl'
     })
     .when('/signUp', {
       templateUrl: 'views/signUp.html',
       controller: 'SignUpCtrl'
     })
     .when('/about', {
       templateUrl: 'views/about.html',
       controller: 'AboutCtrl'
     })
     .when('/userProfile', {
       templateUrl: 'views/userProfile.html',
       controller: 'UserCtrl'
     })
      .when('/book', {
       templateUrl: 'views/book.html',
       controller: 'BookCtrl'
     })
      .when('/logIn', {
       templateUrl: 'views/logIn.html',
       controller: 'LogInCtrl'
     })
      .when('/bookProfile', {
      templateUrl: 'views/bookProfile.html',
      controller: 'bookProfileCtrl'
     })
      .when('/forgotPassword', {
      templateUrl: 'views/forgotPassword.html',
      controller: 'ForgotPasswordCtrl'
     })
      .when('/resetPassword', {
      templateUrl: 'views/resetPassword.html',
      controller: 'ResetPasswordCtrl'
     })
     .otherwise({
       redirectTo: '/'
     });
 });





(function(){

 var app = angular.module('signUp',[]);

 app.controller('BookSUController',function(){

   




 });

});

















  
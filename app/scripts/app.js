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
 
 .config(function ($routeProvider) {
   $routeProvider
     .when('/', {
       templateUrl: 'views/home.html',
       controller: 'HomeCtrl'
     })
     .when('/login', {
       templateUrl: 'views/main.html',
       controller: 'MainCtrl'
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
     .otherwise({
       redirectTo: '/'
     });
 });














(function(){

 var app = angular.module('signUp',[]);

 app.controller('BookSUController',function(){

   




 });

});

















  
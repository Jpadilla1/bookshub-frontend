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
        .when('/sign-up', {
            templateUrl: 'views/signUp.html',
            controller: 'SignUpCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/contactus', {
            templateUrl: 'views/contactus.html',
            controller: 'ContactUsCtrl'
        })
        .when('/user-profile', {
            templateUrl: 'views/userProfile.html',
            controller: 'UserCtrl'
        })
        .when('/book', {
            templateUrl: 'views/book.html',
            controller: 'BookCtrl'
        })
        .when('/requested', {
            templateUrl: 'views/requested.html',
            controller: 'RequestCtrl'
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
        .when('/404', {
            templateUrl: '404.html',
            controller: '404Ctrl'
        })
        .when('/specific-profile', {
            templateUrl: 'views/specificUserProfile.html',
            controller: 'SpecificUserCtrl'
        })
        .when('/all-users', {
            templateUrl: 'views/showAllUsers.html',
            controller: 'ShowAllUsersCtrl'
        })
        .otherwise({
            redirectTo: '/404'
        });
});

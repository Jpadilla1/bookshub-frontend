'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('SignUpCtrl', function($scope) {

    $scope.retypedPassword = '';

    $scope.signUpForm = {
        "last_name": '',
        "email": '',
        "first_name": '',
        "username": '',
        "password": '',
        "type": 'standard',
        "phone": '',
        "title": ''
    };

    $scope.settingsForm = {
        "zip": '',
        "twitter_url": '',
        "google_url": '',
        "address_1": '',
        "address_2": '',
        "state": '',
        "country": '',
        "city": '',
        "facebook_url": ''
    };

    $scope.tabs = {
        "showBasicForm": true,
        "showStudentForm": false,
        "showUserForm": false
    };

    $scope.showBasicForm = function() {
        $scope.tabs.showBasicForm = true;
        $scope.tabs.showStudentForm = false;
        $scope.tabs.showUserForm = false;
    }

    $scope.showStudentForm = function() {
        $scope.tabs.showBasicForm = false;
        $scope.tabs.showStudentForm = true;
        $scope.tabs.showUserForm = false;
    }

    $scope.showUserForm = function() {
        $scope.tabs.showBasicForm = false;
        $scope.tabs.showStudentForm = false;
        $scope.tabs.showUserForm = true;
    }

    $scope.submit = function() {
        console.log($scope.signUpForm);
        console.log($scope.settingsForm);
    }

    $scope.$on('$viewContentLoaded', function() {
        var navbar = document.getElementById("primary-nav");
        navbar.style.backgroundColor = "white";

        var anchors = document.getElementById("primary-nav").getElementsByTagName('a');

        for (var i = 0; i < anchors.length; i++) {
            anchors[i].style.color = "rgba(17, 213, 119, 0.69)"; 
        };

        var icons = document.getElementById("primary-nav").getElementsByTagName('i');

        for (var i = 0; i < icons.length; i++) {
            icons[i].style.color = "rgba(17, 213, 119, 0.69)"; 
        };

        document.getElementById("brand-logo").src = "../images/logo.png";
    });
});

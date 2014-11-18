'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp')
    .controller('SignUpCtrl', ['$scope', 'authService', function($scope, authService) {

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

    var originalSignUpForm = angular.copy($scope.signUpForm);

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
        authService.signup($scope.signUpForm)
            .then(function(data){
                // success
                $scope.isSignUp = true;
                console.log(data);
            }, function(data){
                $scope.signUpError = true;
                $scope.clearSignUpForm();
                // error
                console.log(data);
        });
        // console.log($scope.settingsForm);
    }

    $scope.clearSignUpForm = function() {
        $scope.signUpForm = angular.copy(originalSignUpForm);
        $scope.retypedPassword = '';
    }

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });
}]);

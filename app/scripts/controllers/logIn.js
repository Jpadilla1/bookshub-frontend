'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:LogInCtrl
 * @description
 * # LogInCtrl
 * Controller of the hubAppApp
 */
//$('.navbar.navbar-inverse').css('background-color', 'rgba(0, 0, 0, 0.74)');

angular.module('hubAppApp')
    .controller('LogInCtrl', function($scope) {

        $scope.logInForm = { 
            "email": '',
            "password": ''
        };
        
        $scope.submit = function() {
            //Here we send data to back end
            console.log($scope.logInForm);
        }

        $scope.$on('$viewContentLoaded', function() {
            var navbar = document.getElementById("primary-nav");
            navbar.style.backgroundColor = "white";
            navbar.style.borderBottomColor = "rgba(17, 213, 119, 0.69)";

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

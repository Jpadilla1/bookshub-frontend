'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('CartCtrl', function($scope) {

    $scope.$on('$viewContentLoaded', function() {
        document.getElementById("primary-nav").style.backgroundColor = "rgba(0, 0, 0, 0.74)";
        document.getElementById("brand-logo").src = "../images/logo.png";
    });
});

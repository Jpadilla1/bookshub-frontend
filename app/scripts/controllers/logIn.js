'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp')
  .controller('LogInCtrl', function ($scope) {
    $scope.submission = [
      email: '',
      password: ''
    ];
  });

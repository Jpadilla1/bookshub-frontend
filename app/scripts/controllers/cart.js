'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('CartCtrl', function($scope) {

	$scope.cartItems = [
	{"title": 'Starting Out With Java',
		"isbn13": '978-0132855839',
		"isbn10": 0132855836,
		"author": 'Tonny Gaddis',
		"quantity": '2',
		"pricePerItem": 40
	}
	];

    $scope.$on('$viewContentLoaded', function() {
		defaultNavbar();
    });
});

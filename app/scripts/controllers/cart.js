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
	},
	{"title": 'Starting Out With Java',
		"isbn13": '978-0132855839',
		"isbn10": 0132855836,
		"author": 'Tonny Gaddis',
		"quantity": '2',
		"pricePerItem": 40
	}
	];

	$scope.totalPrice = 0;

	$scope.checkTotalPrice = function(){
		var sum = 0;
		angular.forEach($scope.cartItems,function(item){
			sum += (item.quantity * item.pricePerItem); 		
		});
		$scope.totalPrice = sum;
	}

	$scope.removeAll = function() {
		$scope.cartItems = [];
		$scope.checkTotalPrice();
		document.getElementById("select-all").checked = false;
		$scope.allItemsClicked = false;
	}

    $scope.$on('$viewContentLoaded', function() {
		defaultNavbar();
		$scope.checkTotalPrice();
    });
});

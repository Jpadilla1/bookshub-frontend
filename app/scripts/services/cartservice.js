'use strict';

/**
 * @ngdoc service
 * @name bookshubFrontendApp.BookService
 * @description
 * # BookService
 * Service in the bookshubFrontendApp.
 */

var app = angular.module('hubAppApp');

app.service('CartService', ['$scope', '$cookies', function($scope, $cookies){
	var resource = {};

	var headers = {
	  'Content-Type': 'application/json',
	  'Authorization': 'JWT ' + $cookies.token
	};

	resource.cart = $resource('https://bookshub.herokuapp.com/api/cart\\/', {}, {
		get: {
			method: "GET",
			isArray: false,
			headers: headers
		},
		save: {
			method: "POST",
			isArray: false,
			headers: headers
		},
	});

	resource.specificCart = $resource('https://bookshub.herokuapp.com/api/cart/:cartId\\/', {}, {
		get: {
			method: "GET",
			isArray: false,
			headers: headers
		},
		save: {
			method: "POST",
			isArray: false,
			headers: headers
		},
		put: {
			method: "PUT",
			isArray: false,
			headers: headers
		},
		remove: {
			method: "DELETE",
			isArray: false,
			headers: headers
		}
	});
}]);
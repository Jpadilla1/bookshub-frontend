'use strict';

/**
 * @ngdoc service
 * @name bookshubFrontendApp.BookService
 * @description
 * # BookService
 * Service in the bookshubFrontendApp.
 */

var app = angular.module('hubAppApp');

app.service('MyOfferService', ['$resource', '$cookies', 'authService', function($resource, $cookies, authService){
	var resource = {};

	// \\escape slash
	resource.bookOffer = $resource('https://bookshub.herokuapp.com/api/offers\\/', {}, {
		get: {
			method: "GET",
			isArray: false,
			headers: {'Content-Type': 'application/json'}
		},
		save: {
			'method': "POST",
			'isArray': false,
			'headers': {'Content-Type': 'application/json'},
			'stripTrailingSlashes': true
		},
	});

	return resource;
}]);
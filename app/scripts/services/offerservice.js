'use strict';

/**
 * @ngdoc service
 * @name bookshubFrontendApp.BookService
 * @description
 * # BookService
 * Service in the bookshubFrontendApp.
 */

var app = angular.module('hubAppApp');

app.service('MyOfferService', ['$resource', '$cookies', function($resource, $cookies){
	var resource = {};

	// \\escape slash
	resource.bookOffer = $resource('https://bookshub.herokuapp.com/api/offers/:offerId\\/', {}, {
		get: {
			method: "GET",
			isArray: false,
			headers: {'Content-Type': 'application/json'}
		},
	});

	return resource;
}]);
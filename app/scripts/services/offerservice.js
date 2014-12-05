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
	var headers = {
		'Content-Type': 'application/json',
		'Authorization': 'JWT ' + $cookies.token
	};

	resource.bookOffer = $resource('https://bookshub.herokuapp.com/api/offers/:offerId\\/', {}, {
		get: {
			method: "GET",
			isArray: false
			// headers: headers
		},
		save: {
			url: 'https://bookshub.herokuapp.com/api/offers\\/',
			method: "POST",
			isArray: false,
			headers: headers
		},
		patch: {
			method: "PATCH",
			isArray: false,
			headers: headers
		}
	});

	resource.userOffers = $resource('https://bookshub.herokuapp.com/api/offers/?owner=:ownerId', {}, {
		get: {
			method: "GET",
			isArray: false
			// headers: headers
		}
	});

	return resource;
}]);
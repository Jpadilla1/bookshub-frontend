'use strict';

/**
 * @ngdoc service
 * @name bookshubFrontendApp.BookService
 * @description
 * # BookService
 * Service in the bookshubFrontendApp.
 */

var app = angular.module('hubAppApp');

app.service('MyBookService', ['$resource', '$cookies', function($resource, $cookies){
	var resource = {};

	// \\escape slash
	resource.specificBook = $resource('https://bookshub.herokuapp.com/api/books/:bookId\\/', {}, {
		get: {
			method: "GET",
			isArray: false,
			headers: {'Content-Type': 'application/json'}
		},
	}),
	resource.bookReviews = $resource('https://bookshub.herokuapp.com/api/books/:bookId/reviews\\/', {},{
		get: {
			method: "GET",
			isArray: false,
			headers: {'Content-Type': 'application/json'}
		},
	});
	resource.topRecommended = $resource('https://bookshub.herokuapp.com/api/books/top/recommended\\/', {}, {
		get: {
			method: "GET",
			isArray: false,
			headers: {'Content-Type': 'application/json'}
		},
	});
	resource.topRequested = $resource('https://bookshub.herokuapp.com/api/books/top/requested\\/', {}, {
		get: {
			method: "GET",
			isArray: false,
			headers: {'Content-Type': 'application/json'}
		},
	});

	return resource;
}]);
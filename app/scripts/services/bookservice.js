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
	
	var headers = {
	  'Content-Type': 'application/json',
	  'Authorization': 'JWT ' + $cookies.token
	};

	// \\escape slash
	resource.specificBook = $resource('https://bookshub.herokuapp.com/api/books/:bookId\\/', {}, {
		get: {
			method: "GET",
			isArray: false,
			headers: headers
		},
	}),
	resource.bookReviews = $resource('https://bookshub.herokuapp.com/api/books/:bookId/reviews\\/', {},{
		get: {
			method: "GET",
			isArray: false,
			headers: headers
		},
	});
	resource.topRecommended = $resource('https://bookshub.herokuapp.com/api/books/top/recommended\\/', {}, {
		get: {
			method: "GET",
			isArray: false,
			headers: headers
		},
	});
	resource.topRequested = $resource('https://bookshub.herokuapp.com/api/books/top/requested\\/', {}, {
		get: {
			method: "GET",
			isArray: false,
			headers: headers
		},
	});

	return resource;
}]);
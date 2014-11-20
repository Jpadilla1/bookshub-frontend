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
	
	resource.bookId = '';

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
		save: {
			url: "https://bookshub.herokuapp.com/api/books\\/",
			method: "POST",
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
	resource.booksRequested = $resource('https://bookshub.herokuapp.com/api/books/requested\\/', {}, {
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
		resource.specificBookRequested = $resource('https://bookshub.herokuapp.com/api/books/requested/:requestId\\/', {}, {
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
		},
	});
	return resource;
}]);
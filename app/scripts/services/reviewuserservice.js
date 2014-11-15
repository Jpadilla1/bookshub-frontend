'use strict';

/**
 * @ngdoc service
 * @name bookshubFrontendApp.BookService
 * @description
 * # BookService
 * Service in the bookshubFrontendApp.
 */

var app = angular.module('hubAppApp');

app.service('UserReviewService', ['$resource', '$cookies', function($resource, $cookies){
	var resource = {};

	var headers = {
	  'Content-Type': 'application/json',
	  'Authorization': 'JWT ' + $cookies.token
	};

	resource.userReview = $resource('https://bookshub.herokuapp.com/api/users/:userId/reviews\\/', {}, {
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

	resource.specificUserReview = $resource('https://bookshub.herokuapp.com/api/users/:userId/reviews/:reviewId\\/', {}, {
		get: {
			method: "GET",
			isArray: false,
			headers: headers
		},
		remove: {
			method: "DELETE",
			isArray: false,
			headers: headers
		},
		put: {
			method: "PUT",
			isArray: false,
			headers: headers
		},
	});

	return resource;
}]);
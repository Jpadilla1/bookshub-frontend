'use strict';

/**
 * @ngdoc service
 * @name bookshubFrontendApp.BookService
 * @description
 * # BookService
 * Service in the bookshubFrontendApp.
 */

var app = angular.module('hubAppApp');

app.service('ReportService', ['$resource', '$cookies', function($resource, $cookies){
	var resource = {};

	var headers = {
	  'Content-Type': 'application/json',
	  'Authorization': 'JWT ' + $cookies.token
	};

	resource.userReport = $resource('https://bookshub.herokuapp.com/api/report/user\\/', {}, {
		save: {
			method: "POST",
			isArray: false,
			headers: headers
		},
	});

	return resource;
}]);
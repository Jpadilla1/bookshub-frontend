'use strict';

/**
 * @ngdoc service
 * @name bookshubFrontendApp.authService
 * @description
 * # authService
 * Service in the bookshubFrontendApp.
 */

var app = angular.module('hubAppApp');

app.service('MyContactService', ['$resource', '$cookies', function($resource, $cookies){
	var apiUrl = 'https://bookshub.herokuapp.com/api/';
	
	var resource = {};
	var headers = {
	  'Content-Type': 'application/json',
	  'Authorization': 'JWT ' + $cookies.token
	};

	resource.contact = $resource((apiUrl + 'contact\\/'), {}, {
		method: 'POST',
		isArray: false
		// headers: headers
	});
}]);
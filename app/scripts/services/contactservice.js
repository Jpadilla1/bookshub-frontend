var app = angular.module('hubAppApp');

app.service('MyContactService', ['$resource', function($resource){
	var apiUrl = 'https://bookshub.herokuapp.com/api/';
	
	var resource = {};
	var headers = {
	  'Content-Type': 'application/json',
	  'Authorization': 'JWT ' + $cookies.token
	};

	resource.contact = $resource((apirUrl + 'constact\\/'), {}, {
		method: 'POST',
		isArray: false,
		headers: headers
	});
}]);
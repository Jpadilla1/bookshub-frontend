'use strict';

var app = angular.module('hubAppApp');

app.service('MySearch', ['$resource', '$cookies', function($resource, $cookies){
  var resource = {};

  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT ' + $cookies.token
  };

  
  resource.selection = '';
  resource.result = '';

  resource.bookSearch = $resource(
    'https://bookshub.herokuapp.com/api/search/?search_by=:searchBy&search_value=:searchValue&sort_field=:sortField', {}, {
    get: {
      method: "GET",
      isArray: false,
      headers: headers
    },
  });

  resource.bookAutoCompleteSearch = $resource('https://bookshub.herokuapp.com/api/search/autocomplete/?search_by=:searchBy&search_value=:searchValue', {}, {
    get: {
      method: "GET",
      isArray: false,
      headers: headers
    },
  });

  return resource;
}]);

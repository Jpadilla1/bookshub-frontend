'use strict';

var app = angular.module('hubAppApp');

app.service('MySearch', ['$resource', '$cookies', function($resource, $cookies){
  var resource = {};

  resource.bookSearch = $resource(
    'https://bookshub.herokuapp.com/api/search/?search_by=:searchBy&search_value=:searchValue&sort_field=:sortField', {}, {
    get: {
      method: "GET",
      isArray: false,
      headers: {'Content-Type': 'application/json'}
    },
  });

  return resource;
}]);

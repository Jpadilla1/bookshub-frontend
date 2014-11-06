'use strict';

/**
 * @ngdoc service
 * @name bookshubFrontendApp.BookService
 * @description
 * # BookService
 * Service in the bookshubFrontendApp.
 */

var app = angular.module('hubAppApp');


app.factory('MyBookService', function(){
    return new BookService();
});

function BookService(){
    var myService = {
    async: function($http) {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('http://data.pr.gov/resource/uaij-e68c.json').then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    }
  };
  return myService;
};
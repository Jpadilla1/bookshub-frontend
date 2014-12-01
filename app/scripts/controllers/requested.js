'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:UserCtrl
 * @description
 * # MainCtrl
 * Controller of the hubAppApp
 */

var app = angular.module('hubAppApp');

app.controller('RequestCtrl', ['$scope', 'MyBookService', function($scope, MyBookService) {
 
    $scope.rBook = {
        "title": '',
        "isbn_10": '',
        "isbn_13": '',
        "author": '',
        "publisher": '',
        "edition": '',
        "category": ''

    };

    var originalrBookForm = angular.copy($scope.rBook);
    
     // authservice.settings().then(function(data){
     //    $scope.test.user = data.id;
     // });

    //MyBookService.booksRequested.save('', $scope.r);

    $scope.AllRequested = true;
    $scope.TopRequested = false;
    $scope.NewBookFormat = false;
    $scope.AddBook = false;

    $scope.result = '';
    $scope.showAllRequested = function(element) {
        $scope.result = MyBookService.booksRequested.get();
        addActiveClass(element);

        $scope.AllRequested = true;
        $scope.TopRequested = false;
        $scope.AddBook = false;
    };

    $scope.showTopRequested = function(element) {
        $scope.topRequested = MyBookService.topRequested.get();
        addActiveClass(element);

        $scope.AllRequested = false;
        $scope.TopRequested = true;
        $scope.AddBook = false;
    };

    $scope.showAddBook = function(element){
        addActiveClass(element);

        $scope.AddBook = true;
        $scope.AllRequested = false;
        $scope.TopRequested = false;

    };

    $scope.b = '';

    $scope.showNewBookFormat = function(){
        var test = MyBookService.topRequested.get();

        test.$promise.then(function(data){
          $scope.b = data;
          console.log($scope.b.results);
        });

        console.log($scope.b);

        $scope.AddBook = false;
        $scope.AllRequested = false;
        $scope.TopRequested = false;
        $scope.NewBookFormat = true;

    };

    $scope.showAddBookRequested = function(id, index){

        var paramsbook = {
            "requestId": id
        };

        var book = MyBookService.specificBookRequested.get(paramsbook);
        $scope.newData = '';
        book.$promise.then(function(data){
            data.count+=1;
            $scope.newData = data;
            console.log($scope.result.results[index]);
            $scope.result.results[index] = MyBookService.specificBookRequested.put(paramsbook, $scope.newData);
        });
    };

    $scope.showAddBookRequested2 = function(id, index){

        var paramsbook = {
            "requestId": id
        };

        var book = MyBookService.specificBookRequested.get(paramsbook);
        $scope.newData = '';
        book.$promise.then(function(data){
            data.count+=1;
            $scope.newData = data;
            console.log($scope.result.results[index]);
            $scope.topRequested.results[index] = MyBookService.specificBookRequested.put(paramsbook, $scope.newData);
        });
    };


    $scope.AddBook1 = function(){

            MyBookService.booksRequested.save($scope.rBook);

    };

    $scope.Clear = function(){

        $scope.rBook = angular.copy(originalrBookForm);
        $scope.rBook.title = '';
        
    };
    
    
        $scope.showAllRequested();

      $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });

    function addActiveClass(id){
        if(id){
            var element = $('#' + id).addClass('active');
            console.log($('#' + id).attr('id'));

            var elements = $('#requested-sidebar').find('a');
            console.log(elements);
            for(var i = 0; i < elements.length; i++){
                if(elements[i].id != id){
                    $('#' + elements[i].id).removeClass('active');
                }
            }
        }
    };
}]);

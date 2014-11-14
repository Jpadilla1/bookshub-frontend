'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('CartCtrl', function($scope) {

    $scope.cartItems = [{
        "title": 'Starting Out With Java',
        "isbn13": '978-0132855839',
        "isbn10": 0132855836,
        "author": 'Tonny Gaddis',
        "quantity": '2',
        "pricePerItem": 40,
        "selected": false
    }, {
        "title": 'Starting Out With Java 2',
        "isbn13": '978-0132855839',
        "isbn10": 0132855836,
        "author": 'Tonny Gaddis',
        "quantity": '2',
        "pricePerItem": 40,
        "selected": false
    }];

    $scope.totalPrice = 0;

    $scope.checkTotalPrice = function() {
        var sum = 0;
        angular.forEach($scope.cartItems, function(item) {
            sum += (item.quantity * item.pricePerItem);
        });
        $scope.totalPrice = sum;
    }

    $scope.removeAtIndex = function(array, index) {
        array.splice(index, 1);
    }

    $scope.remove = function(index) {
        if (index == -1) {
            if ($scope.allChecked) {
                $scope.cartItems = [];
                $scope.allChecked = false;
                $scope.checkTotalPrice();
            } else {
                for (var i = $scope.cartItems.length - 1; i >= 0; i--) {
                    if ($scope.cartItems[i].selected) {
                        $scope.removeAtIndex($scope.cartItems, i);
                    }
                    $scope.checkTotalPrice();
                };
            }
        } else {
            $scope.removeAtIndex($scope.cartItems, index);
            $scope.checkTotalPrice();
        }
    }

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
        $scope.checkTotalPrice();
    });
});

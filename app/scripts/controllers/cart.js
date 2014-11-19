'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('CartCtrl', ['$scope', 'CartService', 'MyOfferService', 'MyBookService', function($scope, CartService, MyOfferService, MyBookService){

    $scope.cartItems = CartService.cart.get();
    var offerInformation = '';
    var paramsOffer = {
        'offerId': ''
    };
    $scope.totalPrice = 0;

    $scope.$watch('cartItems.results', function(){

        angular.forEach($scope.cartItems.results, function(item) {
            paramsOffer.offerId = item.offer;
            offerInformation = MyOfferService.bookOffer.get(paramsOffer);
            
            offerInformation.$promise.then(function(data){
                item.offerInformation = data;
                $scope.totalPrice += (data.price * item.quantity);
            });

        });

        $scope.cartItems = $scope.cartItems;
    });

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
    });
}]);




'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the hubAppApp
 */
angular.module('hubAppApp').controller('CartCtrl', ['$scope', 'CartService', 'MyOfferService', 'MyBookService', '$http', function($scope, CartService, MyOfferService, MyBookService, $http){

    $scope.cartItems = CartService.cart.get();
    var offerInformation = '';

    var paramsOffer = {
        'offerId': ''
    };

    $scope.update = {
        "quantity": ''
    };

    $scope.totalPrice = 0;

    $scope.$watch('cartItems.results', function(){
        $scope.totalPrice = 0;

        angular.forEach($scope.cartItems.results, function(item) {
            paramsOffer.offerId = item.offer;
            $scope.update.quantity = item.quantity;
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

    $scope.remove = function(id) {

        var params = {
            'cartId': ''
        };

        var removedItem = '';

        if (id == -1) {
            if ($scope.allChecked) {
                angular.forEach($scope.cartItems.results, function(item){
                    params.cartId = item.id;
                    removedItem = CartService.specificCart.remove(params);
                });
                $scope.allChecked = false;

            } else {
                var elements = document.getElementsByTagName('input');

                for (var i = 0; i < elements.length; i++) {
                    if(elements[i].checked){
                        params.cartId = elements[i].value;
                        removedItem = CartService.specificCart.remove(params);
                    }
                };
            }
        } else {
            params.cartId = id;
            removedItem = CartService.specificCart.remove(params);
        }

        removedItem.$promise.then(function(){
            $scope.cartItems = CartService.cart.get();
        });
    }

    $scope.updateData = function(quantity, id, index){

        var params = {
            "cartId": id
        };

        var input = document.getElementsByClassName('quantity-update');

        if(input[index].value <= quantity && input[index].value != 0){
            $scope.cartOffer = CartService.specificCart.get(params);

            $scope.cartOffer.$promise.then(function(){
                var updateCartData = {
                    'pk': id,
                    'offer': $scope.cartOffer.offer,
                    'quantity': input[index].value
                };
                var updateCart = CartService.specificCart.put(params, updateCartData);

                updateCart.$promise.then(function(){
                    $scope.cartItems = CartService.cart.get();
                });
            });

        }else if(input[index].value == 0){
            var removeItem = CartService.specificCart.remove(params);

            removeItem.$promise.then(function(){
                $scope.cartItems = CartService.cart.get();
            });
        }
    };

    $scope.checkout = function(){
        $http({
            method: "POST",
            url: "https://bookshub.herokuapp.com/api/checkout/",
        }).then(function(data){
            CartService.cart.get().$promise.then(function(data){
                $scope.cartItems = data;
                console.log($scope.cartItems);
            });
        });
    };

    $scope.$on('$viewContentLoaded', function() {
        defaultNavbar();
    });
}]);




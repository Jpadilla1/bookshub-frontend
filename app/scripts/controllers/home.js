/*This block mamages the fade in and fade out of the navbar when the user scrolls >= the search section*/
(function($) {
    $(document).ready(function() {
        // hide .navbar first
        $(".navbar-fixed-top").hide();
        // fade in .navbar
        $(function() {
            $(window).scroll(function() {

                // set distance user needs to scroll before we start fadeIn
                if ($(this).scrollTop() >= $(window).height()) {
                    $('.navbar-fixed-top').fadeIn();
                    $('[data-toggle="tooltip"]').tooltip({
                        placement: 'bottom'
                    });
                } else {
                    $('.navbar-fixed-top').fadeOut();
                }
            });
        });
    });
}(jQuery));

/*This block creates an angular.js module and a controller to manage the items displayed and the data
received in the index*/
(function() {
    angular.module('hubAppApp').controller("HomeCtrl", ['$scope', 'MyBookService', 'MySearch', 'authService', '$rootScope', '$location', function($scope, MyBookService, MySearch, authService, $rootScope, $location) {

        $scope.searchInput = '';

        $scope.topRequestedBooks = MyBookService.topRequested.get();

        $rootScope.isAuthenticated;

        $scope.$on('$viewContentLoaded', function() {
            homeNavbar();
            $rootScope.checkUserStatus();
        });

        $scope.searchResult = '';

        $rootScope.checkUserStatus = function() {
            authService.authenticationStatus().then(function() {
                $scope.setStatus();
            });
        }

        $rootScope.setStatus = function() {
            $rootScope.isAuthenticated = authService.authenticated;
        }

        $scope.searchBy = function(selection) {
            result = validateField($scope.searchInput);
            if (result) {
                var params = {
                    'searchBy': selection,
                    'searchValue': result
                };

                $scope.searchResult = MySearch.bookSearch.get(params);
                console.log($scope.searchResult);
            }
        }
    }]);
})();

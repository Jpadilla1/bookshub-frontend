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
                    var searchButton = document.getElementById('home-navbar-no-background');
                    
                    if(searchButton)
                        searchButton.style.backgroundColor = "rgba(17, 213, 119, 0.69)";
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
    angular.module('hubAppApp').controller("HomeCtrl", ['$scope', 'MyBookService', 'MySearch', 'authService', '$rootScope', '$location', '$cookieStore', function($scope, MyBookService, MySearch, authService, $rootScope, $location, $cookieStore) {

        $scope.searchInput = '';

        $scope.topRequestedBooks = MyBookService.topRequested.get();

        $rootScope.isAuthenticated;

        $scope.gravatar = '';

        $scope.$on('$viewContentLoaded', function() {
            homeNavbar();
            $rootScope.checkUserStatus();
            $scope.setGravatar();
        });

        $scope.searchResult = '';

        $scope.setGravatar = function () {
            authService.settings().then(function(data) {
                $scope.getGravatar(data);
            });
        }

        $scope.getGravatar = function(data) {
            $scope.gravatar = data.gravatar_url;
            console.log($scope.gravatar);
        }

        $rootScope.checkUserStatus = function() {
            authService.authenticationStatus().then(function() {
                $scope.setStatus();
            });
        }

        $rootScope.logOut = function() {
            $cookieStore.remove('token');
            location.reload();
        }

        $rootScope.setStatus = function() {
            $rootScope.isAuthenticated = authService.authenticated;
        }

        $scope.searchBy = function(selection) {
            result = validateField($scope.searchInput);

            MySearch.selectionResult = selection;
            MySearch.searchResult = result;
        }

       
    }]);
})();

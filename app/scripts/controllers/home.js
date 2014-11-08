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
    angular.module('hubAppApp').controller("HomeCtrl", ['$scope', 'MyBookService', function($scope, MyBookService){

            $scope.searchInput = '';

             console.log(MyBookService.topRequested.get());

            $scope.topRequestedBooks = MyBookService.topRequested.get();

            $scope.$on('$viewContentLoaded', function() {
                homeNavbar();
            });

            $scope.submitByTitle = function() {
                alert("tile");
            }

            $scope.submitByIsbn10 = function() {
                alert("isbn10");
            }

            $scope.submitByIsbn13 = function() {
                alert("isbn 13");
            }

            $scope.submitByAuthor = function() {
                alert("author");
            }
    }]);
})();

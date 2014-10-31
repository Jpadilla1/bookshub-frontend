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
    angular.module('hubAppApp').controller("HomeCtrl", function($scope) {

        $scope.searchInput = '';

        $scope.$on('$viewContentLoaded', function() {
            var navbar = document.getElementById("primary-nav");
            navbar.style.backgroundColor = "transparent";
            navbar.style.borderBottomColor = "transparent";

            var anchors = document.getElementById("primary-nav").getElementsByTagName('a');
            for (var i = 0; i < anchors.length; i++) {
                anchors[i].style.color = "white";
            };

            var icons = document.getElementById("primary-nav").getElementsByTagName('i');
            for (var i = 0; i < icons.length; i++) {
                icons[i].style.color = "white";
            };

            document.getElementById("brand-logo").src = "../images/bookshub-white.png";
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
    });
})();

/*This block mamages the fade in and fade out of the navbar when the user scrolls >= the search section*/
(function($) {
    $(document).ready(function() {
        // hide .navbar first
        $(".navbar-fixed-top").hide();
        // fade in .navbar
        $(function() {
            $(window).scroll(function() {

                // set distance user needs to scroll before we start fadeIn
                if ($(this).scrollTop() >= $('.index-background').height()) {
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
    
    //Creates angular module
    var app = angular.module("homeApp", []);

    //Creates the controller named indexCtrl
    app.controller("homeCtrl", function($scope) {
        this.searchIcon = icon;
    });
    var icon = {
        toggled: false
    }
})();

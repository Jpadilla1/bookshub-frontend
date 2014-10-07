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
        this.searchIcon = icon;
    });
    var icon = {
        toggled: false
    }
})();

// $(function ()  
// { $("#iconToggle").popover({title: 'Settings', content: "It's so simple to create a tooltop for my website!"});  
// });  


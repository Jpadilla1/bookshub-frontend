function homeNavbar(){
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
};

function defaultNavbar(){
    var navbar = document.getElementById("primary-nav");
    navbar.style.backgroundColor = "white";
    navbar.style.borderBottomColor = "rgba(17, 213, 119, 0.69)";

    var anchors = document.getElementById("primary-nav").getElementsByTagName('a');

    for (var i = 0; i < anchors.length; i++) {
        anchors[i].style.color = "rgba(17, 213, 119, 0.69)"; 
    };

    var icons = document.getElementById("primary-nav").getElementsByTagName('i');

    for (var i = 0; i < icons.length; i++) {
        icons[i].style.color = "rgba(17, 213, 119, 0.69)"; 
    };

    document.getElementById("brand-logo").src = "../images/logo.png";
};

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'bottom'
    });
});
$(document).ready(function () {
    $('.sidebar')
        .sidebar('toggle');

    var marginLeftMenu = $("#left-menu-full").css("margin-left").replace("px", "").replace("-", "");
    var windowSize = $(window).width();
    var size = ((parseInt(windowSize) - parseInt(marginLeftMenu)) / parseInt(windowSize)) * 100;

    $('#top-menu').css({"width":size + "%"});

    $(".news.image").imgLiquid();

});

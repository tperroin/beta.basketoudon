$(document).ready(function () {

    var windowSize = $(window).width();
    if(windowSize <= 1180) {
        var marginLeftMenu = $("#left-menu-partial").css("margin-left").replace("px", "").replace("-", "");

        $('#left-menu-partial')
            .sidebar('toggle');
    }else{
        var marginLeftMenu = $("#left-menu-full").css("margin-left").replace("px", "").replace("-", "");

        $('#left-menu-full')
            .sidebar('toggle');
    }
    var size = ((parseInt(windowSize) - parseInt(marginLeftMenu)) / parseInt(windowSize)) * 100;

    $('#top-menu').css({"width":size + "%"});

    $( window ).resize(function() {
        var windowSize = $(window).width();
        if(windowSize <= 1180) {
            var marginLeftMenu = $("#left-menu-partial").css("margin-left").replace("px", "").replace("-", "");

            $('#left-menu-full')
                .sidebar('hide')
            ;
            $('#left-menu-partial')
                .sidebar('show')
            ;
        }else{
            var marginLeftMenu = $("#left-menu-full").css("margin-left").replace("px", "").replace("-", "");


            $('#left-menu-partial')
                .sidebar('hide')
            ;
            $('#left-menu-full')
                .sidebar('show')
            ;
        }
        var size = ((parseInt(windowSize) - parseInt(marginLeftMenu)) / parseInt(windowSize)) * 100;
        $('#top-menu').css({"width":size + "%"});
    });

    $(".news.image").imgLiquid();

});

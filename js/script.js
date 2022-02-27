$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
        $('#navbar').addClass("bg-header")
        $('.nav-link').css("background", "#1B1C57")
    }
    if (scroll < 100) {
        $('#navbar').removeClass("bg-header")
        $('.nav-link').css("background", "rgba(255, 255, 255, 0.1)")
    }
});
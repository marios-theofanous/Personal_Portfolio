
$(document).ready(function () {
    $("#learnMoreBtn").click(function () {
        $('html, body').animate({
            scrollTop: $("#wrapper2").offset().top-$('#navtest').outerHeight()+1
        }, 1250);
    });

    $(".nav-link").click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top-$("#navtest").outerHeight()+2
        }, 1250);
    })

    $(".navbar-brand").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1250);
    })
})
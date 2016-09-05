
$(document).ready(function () {
    $("#learnMoreBtn").click(function () {
        $('html, body').animate({
            scrollTop: $("#wrapper2").offset().top-$('#navtest').outerHeight()+1
        }, 1250);
    });
})
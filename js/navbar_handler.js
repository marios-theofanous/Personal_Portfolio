// Makes the navbar change when it is not at the top of the page
//Is also responsible for the active state of the navlink depending on scroll height
//If more wrappers are needed add them to the wrappers array, the last one in the array must correspond to the last one in the DOM
// If you want to change the appearance of the navbar change the stylesheet at styles.scss
//Added debounce time to reduce the amount of times the scroll event triggers the navbarChanger
var wrappers;
$(document).ready(function () {
    //The main sections of the page are inside divs that have the name of wrapper#
    wrappers = [$("#wrapper2"), $("#wrapper3"), $("#wrapper4")];
    navbarChanger();

    //Makes the button at the top of the page animate scroll to one of the wrappers
    $("#learnMoreBtn").click(function () {
        $('html, body').animate({
            scrollTop: $("#wrapper2").offset().top-$('#navtest').outerHeight()+2
        }, 1250);
    });

    //Provides smooth animation for the links of the navbar
    $(".nav-link").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top-$("#navtest").outerHeight()+2
        }, 1250);
    });
    $(".navbar-brand").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1250);
    });
})

//Each time the user scrolls check if the navbar needs to change
//The function is debounced because many browsers call the scroll event multiple times per scroll and that would
//impact performance
$(window).on('scroll', _.debounce(function () {
    navbarChanger();
},15))

function navbarChanger() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop===0){
        $("#navtest").addClass("nav-see-through").removeClass("nav-orange");
    } else {
        $("#navtest").removeClass("nav-see-through").addClass("nav-orange");
    }
    var maxElement=null;
    var max=0;
    wrappers.forEach(function (element) {
        if(scrollTop>element.offset().top-$("#navtest").outerHeight()+1)
        {
            if(element.offset().top-$("#navtest").outerHeight()+1>max){
                max=element.offset().top-$("#navtest").outerHeight()+1;
                maxElement=element.get(0);
            }
        }
    })

    //If the mexElement is null then we are before any of the wrappers included in the navbar
    if(maxElement===null){
        $(".nav-link").each(function () {
            $(this).removeClass("active");
        })
        //If we have scrolled close to the bottom then the last element of the navbar need to have the active class
    } else if($(window).height()+scrollTop+10>$(document).height()) {
        $(".nav-link").each(function (idx) {
            if (idx==$(".nav-link").length-1){
                $(this).addClass("active");
            } else {
                $(this).removeClass("active")
            }
        })
        //Otherwise we get the maxElement id and find the .nav-link it corresponds to.
        //We use the href attribute of each .nav-link to find it
    } else {
        $(".nav-link").each(function () {
            if ($(this).attr("href")=="#"+maxElement.id){
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        })
    }
}
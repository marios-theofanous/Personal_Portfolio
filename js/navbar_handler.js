// Makes the navbar change when it is not at the top of the page
//Is also responsible for the active state of the navlink depending on scroll height
//If more wrappers are needed add them to the wrappers array, the last one in the array must correspond to the last one in the DOM
// If you want to change the appearance of the navbar change the styles at styles.scss
//Added debounce time to reduce the amount of times the scroll event triggers the navbarChanger
var wrappers;
$(document).ready(function () {
    wrappers = [$("#wrapper2"), $("#wrapper3"), $("#wrapper4")];
    navbarChanger();
})
$(window).on('scroll', _.debounce(function () {
    navbarChanger();
}))

function navbarChanger() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop==0){
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
    
    if(maxElement==null){
        $(".nav-link").each(function () {
            $(this).removeClass("active");
        })
    } else if($(window).height()+scrollTop+10>$(document).height()) {
        $(".nav-link").each(function (idx) {
            if (idx==$(".nav-link").length-1){
                $(this).addClass("active");
            } else {
                $(this).removeClass("active")
            }
        })
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
// Makes the navbar change when it is not at the top of the page
// If you want to change the appearance of the navbar got change the two styles at styles.scss
$(document).ready(function () {
    navbarChanger();
})
$(window).scroll(function () {
    navbarChanger();
})

function navbarChanger() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop==0){
        $("#navtest").addClass("nav-see-through").removeClass("nav-orange");
    } else {
        $("#navtest").removeClass("nav-see-through").addClass("nav-orange");
    }
}
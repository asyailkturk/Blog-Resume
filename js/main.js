$(document).ready(function () {

//Navbar


let nav_offset_top = $('.header_area').height() + 50;

    function navbarFix() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fix');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fix');
                }
            })
        }
    }

    navbarFix();
});
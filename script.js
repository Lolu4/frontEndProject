$(function () {
    /*Fix Header*/
    let header = $("#JS-header");
    let intro = $("#JS-intro");
    let introHeight = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introHeight);

    $(window).on("scroll resize", function () {
        introHeight = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introHeight);
    });

    function checkScroll(scrollPos, introHeight) {
        if (scrollPos > introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Scroll */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let blockID = $(this).data('scroll');
        let ofSet = $(blockID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: ofSet - 80
        }, 600)
    });


    /* navBurger*/
    let nav = $("#nav");
    $("#navBurger").on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");

    });


    /* clients__slider */
    /* Reviews: https://kenwheeler.github.io/slick/ */
    let slider = $("#clients__slider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});


    /* clients__slider */




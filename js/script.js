$(document).ready(function() {

    if($('.carousel')) {
        $('.carousel').slick({
            infinite: true,
            dots: true,
            arrows: false,
            autoPlay: true,
            autoplaySpeed: 5000,
            initialSlide: 2
        });
    }

    if($('.testimonials__carousel')) {
        $('.testimonials__carousel').slick({
            infinite: true,
            arrows: true,
            appendArrows: $('.testimonials__controls'),
            prevArrow: '<a class="testimonials__prev" href="#"></a>',
            nextArrow: '<a class="testimonials__next" href="#"></a>',
        });
    }

});
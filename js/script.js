$(document).ready(function() {


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
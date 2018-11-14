$(document).ready(function() {


    if($('.carousel')) {
        $('.carousel').slick({
            infinite: true,
            arrows: true,
            appendArrows: $('.testimonials-carousel__controls'),
            prevArrow: '<a class="testimonials-carousel__prev" href="#"></a>',
            nextArrow: '<a class="testimonials-carousel__next" href="#"></a>',
        });
    }

});
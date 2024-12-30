jQuery(document).ready(function($){
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpead: 2000
    });
});

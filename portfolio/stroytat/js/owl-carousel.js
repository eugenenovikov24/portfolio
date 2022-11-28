$(document).ready(function(){
    $(".section-reviews .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['', ''],
        dots: false
     });

     $(".section-portfolio .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['', ''],
        dots: true
     });
  });
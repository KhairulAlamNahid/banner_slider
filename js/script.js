$(function () {
  // slider
  $('.image').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    asNavFor: '.text',
    autoplay: true,
    speed: 1200,
  });

  $('.text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
    asNavFor: '.image',
    speed: 1000,
  });

  // type js
  var typed = new Typed('.type', {
    strings: [
      'freelancer',
      'developer',
      'graphic designer'
    ],
    loop: true,
    typeSpeed: 100,
    backDelay: 1000,
    backSpeed: 40,
    cursorChar: '|',
  });

});
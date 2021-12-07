$(function () {

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 2000
  });

  $('.reviews__slider').slick({
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'ease',
    // autoplay: true,
    autoplaySpeed: 2000
  });

  $('.video__slider-wrapper').slick({
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 1.35,
    slidesToScroll: 1,
    infinite: false,
    speed: 1000,
    easing: 'ease',
    centerMode: true,
    // autoplay: true,
    autoplaySpeed: 2000
  });

  $('.news__slider').slick({
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    easing: 'ease',
    // autoplay: true,
    autoplaySpeed: 2000
  });

  $('.social__slider').slick({
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    easing: 'ease',
    // autoplay: true,
    autoplaySpeed: 2000
  });

  $('.slider-item__content-btnPrev, .video__slider-btnPrev').click(function (event) {
    $('.reviews__slider, .video__slider-wrapper').slick("slickPrev");
  });
  $('.slider-item__content-btnNext, .video__slider-btnNext').click(function (event) {
    $('.reviews__slider, .video__slider-wrapper').slick("slickNext");
  });

  $('.news__slider-btnPrev').click(function (event) {
    $('.news__slider').slick("slickPrev");
  });
  $('.news__slider-btnNext').click(function (event) {
    $('.news__slider').slick("slickNext");
  });

  $('.social__slider-btnPrev').click(function (event) {
    $('.social__slider').slick("slickPrev");
  });
  $('.social__slider-btnNext').click(function (event) {
    $('.social__slider').slick("slickNext");
  });

  var mixer = mixitup('.clinics', {
    load: {
      filter: '.category-a'
    }
  });


  $(".star").rateYo({
    starWidth: "33px",
    spacing: "13px",
    normalFill: "#d6d6d6",
    ratedFill: "#FBBC05",
    readOnly: true
  });



  new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  });  
});


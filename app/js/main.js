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

  $('.slider-item__content-btnPrev, .video__slider-btnPrev').click(function (event) {
    $('.reviews__slider').slick("slickPrev");
  });
  $('.slider-item__content-btnNext, .video__slider-btnNext').click(function (event) {
    $('.reviews__slider').slick("slickNext");
  });

  $('.video__slider-btnPrev').click(function (event) {
    $('.video__slider-wrapper').slick("slickPrev");
  });
  $('.video__slider-btnNext').click(function (event) {
    $('.video__slider-wrapper').slick("slickNext");
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


$(function () {

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 2000
  });

  // $('.specialists__items').slick({
  //   arrows: true,
  //   adaptiveHeight: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   speed: 1000,
  //   easing: 'ease',
  //   // autoplay: true,
  //   autoplaySpeed: 2000
  // });

  new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      // clickable: true,
    //   dynamicBullets: true,
    //   renderBullet: function (index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    //   },
    },

  });

});


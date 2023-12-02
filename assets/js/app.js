jQuery(document).ready(function ($) {
    jQuery('.stellarnav').stellarNav({
        breakpoint: 960,
        position: 'right',

    });
});



$(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
        $('.header-main').addClass('sticky');
    }
    else {
        $('.header-main').removeClass('sticky');
    }
});


var owl = $('.services-carousel');
owl.owlCarousel({
  margin: 10,
  loop: true,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 6,
      nav: true
    }
  }
})

$(document).ready(function() {

  // slider
  var slider = $('.content-slider').lightSlider({
    item: 6,
    loop: true,
    slideMove: 1,
    slideMargin: 30,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    // controls: false,
		pager: false,
    responsive : [
      {
        breakpoint: 991,
        settings: {
          item: 3,
          // slideMove: 1,
          slideMargin: 30,
        }
      },
      {
        breakpoint: 767,
        settings: {
          item: 2,
          slideMargin: 14,
          // slideMove: 1
        }
      }
    ]
  });

})
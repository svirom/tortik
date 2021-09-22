$(document).ready(function() {

  // display submenu on hover
  $(window).on('load resize', function() {
    var width = $(document).width();

    if (width >= 768) {
      $('.dropdown-hover').hover(
        function() {
          $(this).addClass('show');
          $(this).find('.item-toggle').attr('aria-expanded', 'true');
          $(this).find('.dropdown-menu').addClass('show');
        },
        function() {
          $(this).removeClass('show');
          $(this).find('.item-toggle').attr('aria-expanded', 'false');
          $(this).find('.dropdown-menu').removeClass('show');
        }
      );
    } else {
      $(".dropdown").off('mouseenter mouseleave');
    }
  });

  // catalogue mobile
  $('#mobile-category-open').on('click', catalogOpen);
  $('#mobile-category-close').on('click', catalogClose);

  function catalogOpen(e) {
    e.preventDefault();

    $(this).closest('.navbar-collapse').addClass('overflow-y-hidden')
      .find('.mobile-catalog').addClass('active');
  }

  function catalogClose(e) {
    e.preventDefault();

    $(this).closest('.navbar-collapse').removeClass('overflow-y-hidden')
      .find('.mobile-catalog').removeClass('active');
  }

  // slider
  var slider = $('#content-slider').lightSlider({
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
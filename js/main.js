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

  // back to top
  $('#back-to-top').on('click.smoothscroll', function(e) {
    e.preventDefault();
    $('html, body').stop().animate({
      'scrollTop': 0,
    }, 600);
  })

  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $('#back-to-top').addClass('visible');
    } else {
      $('#back-to-top').removeClass('visible');
    }
  });

  // item gallery
  $('.item-gallery-thumb a').on('click', function(e) {
    e.preventDefault();
    var currImg = $(this).find('img').attr('src');

    $('.item-gallery-main').find('img').css('display', 'none').attr('src', currImg).fadeIn(400);
  })

  // open submenu on load (if submenu page)
  var activeSubpages = $('.aside-submenu').find('.active');

  if (activeSubpages && (activeSubpages.length > 0)) {
    $(activeSubpages).each(function() {
      // $(this).closest('.collapse').collapse('show');

      $(this).closest('.collapse').addClass('show')
        .prev('.has-submenu').attr('aria-expanded', true);
    })
  }

})
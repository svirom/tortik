$(document).ready(function() {

  // display submenu on hover
  $(window).on('load resize', function() {
    var width = $(document).width();

    if (width >= 768) {
      // $('.dropdown-hover').hover(
      //   function() {
      //     const $this = $(this);
      //     $(this).addClass('show');
      //     $(this).find('.dropdown-toggle').attr('aria-expanded', 'true');
      //     $(this).find('.dropdown-menu').addClass('show');
      //   },
      //   function() {
      //     $(this).removeClass('show');
      //     $(this).find('.dropdown-toggle').attr('aria-expanded', 'false');
      //     $(this).find('.dropdown-menu').removeClass('show');
      //   }
      // );
    } else {
      $(".dropdown").off('mouseenter mouseleave');
    }
  });

})
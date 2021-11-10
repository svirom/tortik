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

  // invoice slider
  var invoiceSlider = $('.invoice-slider').lightSlider({
    item: 1,
    loop: true,
    slideMove: 1,
    slideMargin: 30,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
		pager: false,
    
    onSliderLoad: function(el) {  
		  var slideCount = $(el).find('.lslide').length;

      $('#items-amount').text(slideCount);
      $('#current-item-number').text('1');

      $(el).find('.slider-card').on('click', function() {
        var currImage = $(this).find('img').attr('src');

        $('#invoice-modal').find('.modal-body img').attr('src', currImage);
      })

      $('#invoice-modal').on('hidden.bs.modal', function() {
        $(this).find('.modal-body img').attr('src', '');
      })
    },

    onBeforeSlide: function() {
      var currSlide = invoiceSlider.getCurrentSlideCount();

      $('#current-item-number').text(currSlide);
    },
  });

})
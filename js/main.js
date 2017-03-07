jQuery(function($) {'use strict',

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});
$(function(){
    $('section').eq(0).css('padding-top', $('#header').outerHeight());
})
	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),

			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});

	
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});
$("#slider-item").lightSlider({
          gallery:true,
          item:3,
          thumbItem:0,
          slideMargin: 20,
          speed:1200,
          auto:true,
          loop:true,
         responsive: [{
             breakpoint : 817,
             settings: {
               item: 2,
               slideMove: 1,
               sliderWidth: 300
                 }
             }, {
             breakpoint:666,
             settings: {
               item: 1,
               slideMove: 1,
               sliderWidth: 375
               }
             }, {
             breakpoint: 480,
             settings: {
               item: 1,
               slideMove: 1,
               sliderWidth: 375
               }
             }],
          onSliderLoad: function() {
              $('#slider-item').removeClass('cS-hidden');
          }
      });
$(function(){
	$('#comparison-c').click(function(e){
		e.preventDefault();
		if($(this).hasClass('active-1')){
			$(this).removeClass('active-1');
			$('#comparison-content').slideUp(100);
		}else{
		$(this).addClass('active-1');
		$('#comparison-content').slideDown(100);
	}
	});
	$('#comparison-content').slideUp(100);
});
// $(window).scroll(function(){
// 	if($(window).scrollTop()>$('#header').outerHeight()+$('#comprasion').outerHeight()+$('#feature').outerHeight()+$('#recent-works').outerHeight()+$('#main-slider').outerHeight()+200){
// 		$('#comparison-content').slideUp(300);
// 	}
// });
$(function() {
  $('a[href="#comprasion"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-50
        }, 1000);
        return false;
      }
    }
  });
});
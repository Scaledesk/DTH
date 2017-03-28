
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
/* tabs function */
$('ul.tabs > li').click(function(){
    $('div.tab-content').find('div.active-content').removeClass('active-content');
    $('ul.tabs > li').removeClass('active-tab');
    $(this).parents('div.tabs-sec').find('div.tab-content').find('div.'+this.className).addClass('active-content');
    $(this).addClass('active-tab');
})
/* tabs function */
/*accordian function*/
$('.panel > .panel-title').click(function(){
    if($(this).parents('.panel').find('.panel-content').hasClass('in')==true){
        $(this).parents('.panel').find('.panel-content').slideUp(150).removeClass('in');
        $(this).find('i.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
    }else if($('.panel-content').hasClass('in')==true){
        $('.faq-content .panel-content').removeClass('in').slideUp(150);
        $('.panel-title').find('i.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
        $(this).parents('.panel').find('.panel-content').slideDown(150).addClass('in');
        $(this).find('i.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
    }else{
        $(this).parents('.panel').find('.panel-content').slideDown(150).addClass('in');
        $(this).find('i.fa').removeClass('fa-angle-down').addClass('fa-angle-up')
    }
});



/*
 sectional scroll*/



$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(function(){
    $('header#header').css('width',window.outerWidth)
})

/**
 * Created by scaledesk on 28/3/17.
 */

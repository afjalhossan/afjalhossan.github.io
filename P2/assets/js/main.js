(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(window).on('scroll', function() {
        var innHeight = window.innerHeight;
        if ($(this).scrollTop() > innHeight - 100 ) {
            $('.navigation').addClass("sticky-nav");
        } else {
            $('.navigation').removeClass("sticky-nav");
        }
    });
        
         $(document).resize(function () {
         var screen = $(window);  

         if (screen.width < 500) {
             $('.navigation').removeClass('sticky-nav');
         } else {
             $('.navigation').addClass('sticky-nav');
         }
         });
        
    
        
         $(window).on('scroll', function() {
        if ($(this).scrollTop() > 0 ) {
            $('.logo-wrapper').addClass("navbar-fixed-top");
        } else {
            $('.logo-wrapper').removeClass("navbar-fixed-top");
        }
        
    });

        
        $(".search-icon").click(function(){
            $(".search-box form").slideToggle(600);
        });
        
        $(".share-box").click(function(){
            $(".social-icon").slideToggle(600);
        })
        $("#simple-menu").click(function(){
            $(".navigation").slideToggle(600);
        })
         


    $("#package-slider").owlCarousel({
        items : 3,
        loop:true,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        itemsTablet: [600,2],
        itemsMobile : [479,1],
        slideSpeed : 400,
        margin      :30,
        mouseDrag: true,
        pagination : false,       
        autoplay : true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true, 
        
    });
        
    //Reviews Slider......
        
    $("#reviews-slider").owlCarousel({
        items : 2,
        loop:true,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [979,2],
        itemsTablet: [600,2],
        itemsMobile : [479,1],
        slideSpeed : 400,
        margin      :30,
        mouseDrag: true,
        pagination : false,       
        autoplay : true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true, 
        
    });
        
    $('.count').counterUp({
    delay: 10,
    time: 1000
    });
    
    

    //Scroll To Top
        var scrl =$("#scrollTop");
        
       $(window).on('scroll',function(){
           if($(this).scrollTop() >300){
               scrl.fadeIn();
           }else{
               scrl.fadeOut();
           }
       });
        
        
        // jQuery smooth scroll
        
        $('.smooth-scroll').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '70';
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

            event.preventDefault();
        });  
   
        $('body').scrollspy({
                    target: '#listGroup',
                    offset:10
                });
        
    
    
    
   });

   

    
}(jQuery));	
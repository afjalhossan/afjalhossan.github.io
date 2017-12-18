(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        
    $(".portfolio-items").isotope();
        
    $(".item-filter ul li").on('click', function(){
            $(".item-filter ul li").removeClass("active");
            $(this).addClass("active");
            
            var selector=$(this).attr('data-filter');
            $(".portfolio-items").isotope({
                filter:selector
            })
        });
        
     $('.progress .progress-bar').appear(function(){
             
            $('.progress .progress-bar').progressbar();
        }); 
        
     var scrl =$("#scrollTop")


       $(window).on('scroll',function(){
           if($(this).scrollTop() >300){
               scrl.fadeIn();
           }else{
               scrl.fadeOut();
           }
       });''
       scrl.on('click',function(){
           $('body,html').animate({
               scrollTop :0
           },1500)
       });


  

       // Milestone counter
    
    jQuery('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    
    $("#reviews-slider").owlCarousel({
        items : 2,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [979,2],
        itemsTablet: [600,1],
        itemsMobile : [479,1],
        slideSpeed : 800,
        loop       :true,
        mouseDrag: false,
        pagination : false,
        navigation: true,
            navText: [
            "<span class='ti-angle-left'></span>",
            "<span class='ti-angle-right'></span>"
            ],        
        autoPlay : false,    
    });
    
     // Brand slider

    jQuery("#brand-slider").owlCarousel({
        items : 3,
        loop:true,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        itemsTablet: [600,2],
        itemsMobile : [479,1],
        slideSpeed : 400,
        mouseDrag: false,
        pagination : false,       
        autoplay : true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true, 
        
    });
    
    // Sticky Navigation

    jQuery(function() {
        $('#navigation').height($("#nav").height());
          $('#nav').affix({
            offset: { top: $('#nav').offset().top -15 }
        });
    });
        
    new WOW().init();
        
     // jQuery smooth scroll
        $('.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '70';
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

            event.preventDefault();
        }); 

   });   
   


}(jQuery));	
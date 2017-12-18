(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".case-study-carousel").owlCarousel({
            loop:true,
            dots:true,
            nav:false,
            margin:30,
            responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items:1,
                    },
                    // breakpoint from 768 up
                    768 : {
                        items:2,
                    },
                    // breakpoint from 768 up
                    992 : {
                        items:3,
                    }
            }
        });
        $(".testimonial-slide").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:false,
        });
        $(".logo-carousel").owlCarousel({
            items:6,
            loop:true,
            dots:false,
            nav:false,
            responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items:2,
                    },
                    // breakpoint from 768 up
                    768 : {
                        items:4,
                    },
                    // breakpoint from 768 up
                    992 : {
                        items:6,
                    }
            }            
        });
        $(".testimonial-carousel-home-2").owlCarousel({
            items:1,
            loop:true,
            dots:false,
            nav:false,
            autoplay:true,
        });
        $(".homepage3-slide").owlCarousel({
            items:1,
            loop:true,
            dots:false,
            nav:true,
            navText:["<i class='zmdi zmdi-arrow-right'>","<i class='zmdi zmdi-arrow-left'>"],
            autoplay:false,
        });
        
        $(".boxed-layout").on('click',function(){
            $("body").addClass("boxed-layout").removeClass("wide-layout");
            $(".layout-changer span").removeClass("active");
            $(this).addClass('active');
        });

        $(".wide-layout").on('click',function(){
            $("body").addClass("wide-layout").removeClass("boxed-layout");
            $(".layout-changer span").removeClass("active");
            $(this).addClass("active");
        });
        $(".menu-trigger").on('click',function(){
            $(".offcanvas-menu").addClass("show-offcanvas");
            $(".offcanvas-menu-shadow").addClass("active");
        });
        $(".menu-close,.offcanvas-menu-shadow").on('click',function(){
            $(".offcanvas-menu").removeClass("show-offcanvas");
            $(".offcanvas-menu-shadow").removeClass("active");
        });
        
        $(".search-trigger").on('click',function(){
            $(".search-bar-wrap").addClass("active");
        });
        $(".search-close").on('click',function(){
         $(".search-bar-wrap").removeClass("active");
        });
        
        $(".single-testimonial-box").hover(function(){
            $(".single-testimonial-box").removeClass("active");
            $(this).addClass('active');
        })
        $(".play-btn,.video-play-btn").magnificPopup({
            type:'video'
        });
        $(".traffic-menu").slicknav({
            prependTo:"#mobile-menu-wrap"
        });
        

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	
(function ($) {
    "use strict";
    jQuery(document).ready(function($){
	
	$("#web-design").circleProgress({
		value:.9,
		size:200,
		fill:'#177cf2',
		thickness:2,
		emptyfill:'#fff'
	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.web-info').html(Math.round(80 * progress) + '<i>%</i>');
	  });
		
    });

    $("#web-dev").circleProgress({
    	value: .8,
    	size: 200,
    	fill:'#ff0',
    	thickness: 3,
    	emptyfill: '#fff'
    }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.web-info').html(Math.round(70 * progress) + '<i>%</i>');
	  });

    $("#graphic-design").circleProgress({
    	value: .8,
    	size: 200,
    	fill:'#f00',
    	thickness: 3,
    	emptyfill: '#fff'
    }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.web-info').html(Math.round(60 * progress) + '<i>%</i>');
	  });

    
    jQuery(window).load(function($){
        
        
        
    });

}(jQuery));
	
	
	

	
	

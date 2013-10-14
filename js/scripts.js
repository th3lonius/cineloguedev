$(document).ready(function() {
    
            //all heading 1s
        $('h1,h2').widowFix();


function fade_header() {
    
		if ($(window).width() >= 720) {

			window_scroll = $(this).scrollTop();

			if (window_scroll > $('header').height()) {

				$('.min').fadeIn('fast');
                
			} else {
				
				$('.min').fadeOut('fast');
        
			}
            
		} else if ($(window).width() >= 480 && $(this).width() <= 720) {
            
            $('.min').show();
            
        }

}
    
    $(window).scroll(function() { fade_header(); });    
    

    
 $('.banner').click(function() {
        $('nav').toggleClass('nudgeLeft'); 
   });
    
    

    




});
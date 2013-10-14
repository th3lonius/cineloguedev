$(document).ready(function() {

    var nav = ('nav ul li a, h3 a');
    

    // Check for hash value in URL
    var hash = window.location.hash.substr(1);
    var href = $('nav ul li a, h3 a').each(function(){
        var href = $(this).attr('href');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html #reviewBody';
            $('#content').load(toLoad)
        } 
    });
    
    $('nav ul li a, h3 a').click(function(){
        if (!$(this).hasClass("current")) {
            $("a").removeClass("current");
            $(this).addClass("current");
        }
        
    var asideContent = $(this).attr('href')+' aside';
    var mainContent = $(this).attr('href')+' article';
    var backStretch = $(this).attr('href')+' #backStretch';
    
    $('#aside').fadeOut('slow');
    $('#content').slideUp('slow',loadContent);
    $('#load').remove();
    $('#wrapper').append('<span id="load">LOADING...</span>');
    $('#load').fadeIn('normal');
        
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
        
    function loadContent() {
        $('#backStretch').load(backStretch);
        $('#aside').load(asideContent);
    	$('#content').load(mainContent,'',showNewContent());
    }
    function showNewContent() {
        $('#backStretch').fadeIn(backStretch);
        $('#aside').fadeIn('slow');
    	$('#content').slideDown('slow',hideLoader());
    }
    function hideLoader() {
    	$('#load').fadeOut('normal');
    }
    return false;
    
    });
    
   
});

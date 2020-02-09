jQuery(function($){
    $('.nav__link').filter(function(){
       return $(this).attr('href').toLowerCase() === window.location.pathname.toLowerCase();
    }).addClass('nav__link_active');
});
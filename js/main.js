$(function(){
    
    $('body').width($(window).width());

    $(window).on('resize', function(){
        $('body').width($(this).width());
        
        if($(this).innerWidth() <= 470){
            $('.social-links').fadeOut();
        }else{
            $('.social-links').fadeIn();
        }
    });

    $(window).on('load', function(){

        if($(this).innerWidth() > 470){
            $('.social-links').delay(2000).fadeIn();
        }

        $('.profile').delay(1100).slideDown(600);
        $('.content').delay(1000).css('left', '0');
    });



    $('.side-menu li a').on('click', function(){

        if( $(this).data('target') == '#profile' ){
            $('.myname').addClass('hide');
        }else{
            $('.myname').removeClass('hide');
        }

        if($($(this).data('target')).css('display') == 'none'){
            
            $(this).parent('li').addClass('active').siblings().removeClass('active');

            $($(this).data('target')).siblings('div').slideUp(600).end()
            .delay(600).slideDown(600);
        }
        
    });

});
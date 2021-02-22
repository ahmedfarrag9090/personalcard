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



    //  Pagination
    $('.side-menu li a').on('click', function(){

        //  Add className 'active' to the clicked list item
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        //  Show related section & hide others
        $($(this).data('target')).siblings('section').slideUp(500).delay(900).end()
            .delay(500).slideDown(500);     

        //  To show Name at top of page
        if( $(this).data('target') === '#profile' ){
            $('.myname').addClass('hide');
        }else{
            $('.myname').removeClass('hide');
        }   
    });

});
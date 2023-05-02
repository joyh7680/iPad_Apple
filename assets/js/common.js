// header footer btn popup 


$(function(){

    lastScroll = 0;

    $(window).scroll(function(){
        curr = $(window).scrollTop();
        if(curr > lastScroll){
            $('.header').addClass('hide')
        }  else{
            $('.header').removeClass('hide')
        }
        lastScroll = curr;
    })

    $('.header .search-area button').click(function(e){
        e.preventDefault();
        $('.group-popUp').addClass('on');
    });
    $('.group-popUp .box-area .close-box, .group-popUp .bg-area').click(function(e){
        $('.group-popUp').removeClass('on');
      
    });

  }); //end
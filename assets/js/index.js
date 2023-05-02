$(function(){
  mainVis = gsap.timeline({
    scrollTrigger:{
      trigger:".main-visual",
      start:"10% 10%",
      end : "100% 0%",
      scrub : 1
    },
  })
    mainVis
    .to('.main-visual .text-area > *',{
      y: -100, opacity : 0,
      stagger:0.1
    })

    var video = document.getElementById("video");

    $('.btn-pause').on('click', function(e){ 
      if($(this).hasClass('on')){ 
        $(this).removeClass('on');
        video.play();
      }else{
        video.pause();
        $(this).addClass('on'); 
      }
    })
   
    // * main-card
    $('.main-card .group-card').each(function(index,element){
      op = (index == 2)? 1 : 0.5;
 
      gsap.to(element,{
        scrollTrigger:{
          trigger:element,
          start:"0% 10%",
          end : "100% 0%",
          scrub : 1
        },
        opacity: op,
        scale : 0.97
    })
    })


    // main-overview
    overview = gsap.timeline({
      defaults:{
        ease: "none",
      },
      scrollTrigger:{
        trigger:".main-overview .group-contents",
        start:"0% 0%",
        end : "300%",
        scrub : 1,
        invalidateOnRefresh : true, 
        pin : true,
      },
    })
    overview
    .addLabel('a')
    .to('.main-overview',{
      background : '#000'
    },'a')
    .to('.main-overview .left-wrap, .main-overview .desc-box',{
      opacity : 0
    },'a')
    .to('.main-overview .container-area .left-wrap',{
      xPercent:-100,
      yPercent:-50 
    },'a')
    .to('.main-overview .container-area .right-wrap',{
      x:-$('.main-overview .container-area .left-wrap').outerWidth(),
      yPercent: -25
    },'a')
    .to('.main-overview .container-area .slide-box',{
      xPercent: -100, 
      x:function(){
        return window.innerWidth;
      }, 
    })
    .to(' .main-overview .name strong',{
      color : '#ccc'
    },'a')
    .to('.main-overview .name p',{
      color: '#a1a1a6'
    },'a')
    .addLabel('b') 
    .to('.main-overview',{
      background : '#fff'
    },'b')
    .to(' .main-overview .name strong',{
      color : '#1d1d1f'
    },'b')
    .to('.main-overview .name p',{
      color: '#86868b'
    },'b')
   

    // main-floating
    $('.main-floating .group-icon .icon').each(function(index,element){
      gsap.to(element,{
        scrollTrigger:{
          trigger:'.main-floating',
          start : "0% 100%",
          end : "100% 0%",
          scrub : 1
        },
        y:element.dataset.y
      })
    })

}); //end 

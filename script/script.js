// $(document).ready(function(){
//   $(".list .a").on("mouseover",function(){
//     $(this).css("display","none");
//     $(".list .b").show();
//   })
// })
// $(document).ready(function(){
//   $(".list .a").on("mouseover",function(){
//     $(".list .a").hide();
//     $(".list .b").show().fadeTo();
//     $(".last").css("display","block");
//   })
//   $(".list .a").on("mouseout",function(){
//     $(".list .a").show();
//     $(".list .b").hide().fadeOut();
//     $(".last").css("display","none");
//   })
// })
$(document).ready(function(){
  $('.pdt50').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
    })
    
  $('.ready').mouseover(function(){
    $(this).attr({src:"images/kimyonghoon2.png"});
    $('.next').css({'display':'block','background':'rgba(0, 0, 0, 0.7)'})
  });
  $('.ready').mouseout(function(){
    $(this).attr({src:"images/kimyonghoon.jpeg"});
    $('.next').css({'display':'none'})
  });
  
  
  // $('.ready').hover(function(){
  //   $(this).css({'display':'block','background':'rgba(0, 0, 0, 0.7)'},{src:"images/kimyonghoon2.png"});
  // },function(){
  //   $(this).css({src:"images/kimyonghoon.jpeg"},{'display':'none'} )
  // });

})

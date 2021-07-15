
// $(document).ready(function(){

//   var sectionIds = $('.nav-link');

//     $(document).scroll(function(){
//         sectionIds.each(function(){

//             var container = $(this).attr('href');
//             var containerOffset = $(container).offset().top;
//             var containerHeight = $(container).outerHeight();
//             var containerBottom = containerOffset + containerHeight;
//             var scrollPosition = $(document).scrollTop();
    
//             if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
//                 $(this).addClass('active');
//             } else{
//                 $(this).removeClass('active');
//             }
    
    
//         });
//     });
// });













// ////////////////
$('.venobox').venobox(); 

new WOW().init();

// /////////////

$('.testimonial-left-slider').slick({
  dots: false,
    infinite: true,
    arrows:false,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial-right-slider',
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 768.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.testimonial-right-slider').slick({
    dots: true,
    infinite: true,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor:'.testimonial-left-slider     ',
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 768.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // /////////////

  $(window).scroll(function(){
    if($(window).scrollTop() > 400){
      $(".menu").addClass("fixd-manu")
    }else{
      $(".menu").removeClass("fixd-manu")
    }   
  })






  

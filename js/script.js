













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
//     var stickyHeaderTop = $('.menu"').offset().top + 160;

  $(window).scroll(function(){
    if($(window).scrollTop() > 500){
      $(".menu").addClass("fixd-manu")
    }else{
      $(".menu").removeClass("fixd-manu")
    }   
  })


//   $(function(){
//     // Check the initial Poistion of the Sticky Header
//     var stickyHeaderTop = $('.menu"').offset().top + 160;

//     $(window).scroll(function(){
//             if( $(window).scrollTop() > stickyHeaderTop ) {
//                     $('.menu"').addClass('fixd-manu');
//             } else {
//                     $('.menu"').removeClass('fixd-manu');
//             }
//     });
// });






  

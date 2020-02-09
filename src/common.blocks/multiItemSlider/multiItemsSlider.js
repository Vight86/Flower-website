$(document).ready(function(){
    $('.multiItemSlider').slick({
      infinite: true,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });
  });
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1300,
        variableWidth: true,/* 
        autoplay:true, */
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="/icons/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/icons/right.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                dots: true,
              }
            }
        ]
    })
     
  });
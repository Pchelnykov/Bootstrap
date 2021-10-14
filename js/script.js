$('.slickslider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
                
                {
                  breakpoint: 991,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      arrows:false
                    }
                },
                
                {
                  breakpoint: 776,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false
                  }
                }
                
              ]
});

$('.reviews-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
   responsive: [
                
                {
                  breakpoint: 991,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      arrows:false
                    }
                },
                
                {
                  breakpoint: 776,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false
                  }
                }   
              ]
});

$('.btn-icon').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn-active');
  $('.menu').toggleClass('menu-block-active');
});
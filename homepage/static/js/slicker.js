$(function () {
    $('.multiple-items').slick({
        infinite : true,
        slidesToShow : 3,
        slidesToScroll : 1,
        arrows : true,
        dots : true,
        autoplay : true,
        autoplaySpeed : 2000,
        
        centerMode: true,
        centerPadding: '60px',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
        
    })
})
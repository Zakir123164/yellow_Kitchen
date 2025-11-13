// // ---------------------------- slick slider -------------------------
// $('.restaurantlItem').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   arrows:true,
//   prevArrow:'<i class="fa-solid fa-arrow-left"></i>',
//   nextArrow: '<i class="fa-solid fa-arrow-right"></i>'
//  })


// ---------------------------- Slick Slider -------------------------
$('.restaurantlItem').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 800,
  prevArrow: '<i class="fa-solid fa-arrow-left prr"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right nxt"></i>',

  responsive: [
    {
      breakpoint: 1200, // laptops
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992, // tablets
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768, // mobile landscape
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // optional: hide arrows on small screens
        dots:false // optional: add dots for better mobile UX
      }
    }
  ]
});

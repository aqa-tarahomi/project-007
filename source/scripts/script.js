   const swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
      breakpoints: {
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      },
    });
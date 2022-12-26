

let allSwiperSlides = document.querySelectorAll(".swiper-slides");

allSwiperSlides.forEach(allSwiperSlidesFunc);

function allSwiperSlidesFunc(ele, index) {
   let swiperButtonNext = ele.querySelector(".swiper-button-next");
   let swiperButtonPrev = ele.querySelector(".swiper-button-prev");
   swiperButtonNext.classList.add(`swiper-button-next${index + 1}`);
   swiperButtonPrev.classList.add(`swiper-button-prev${index + 1}`);

   // loop for all slides initialization
   // slider 1 ===================================================


   new Swiper(`.mySwiper${index + 1}`, {
      loop: true,
      spaceBetween: 10,
      navigation: {
         nextEl: `.swiper-button-next${index + 1}`,
         prevEl: `.swiper-button-prev${index + 1}`,
      },
      thumbs: {
         swiper: new Swiper(`.mySwiper${index + 1}Thumbs`, {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
         }),
      },
   });
}




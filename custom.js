/*all swiper slides*/

let allSwiperSlides = document.querySelectorAll(".swiper-slides");

allSwiperSlides.forEach(allSwiperSlidesFunc);

function allSwiperSlidesFunc(ele,index){
   let swiperButtonNext = ele.querySelector(".swiper-button-next");
   let swiperButtonPrev = ele.querySelector(".swiper-button-prev");
   swiperButtonNext.classList.add(`swiper-button-next${index + 1}`);
   swiperButtonPrev.classList.add(`swiper-button-prev${index + 1}`);
}
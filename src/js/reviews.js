import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  modules: [Navigation],

  navigation: {
    nextEl: '.reviews-next-btn',
    prevEl: '.reviews-prev-btn',
  },
});

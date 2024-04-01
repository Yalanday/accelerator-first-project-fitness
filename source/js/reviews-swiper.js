import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

export const swiperReview = new Swiper('.reviews__swiper', {
  modules: [Navigation, Pagination, Mousewheel, Keyboard], //подключаем модуль навигации по кнопкам
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 1,
      spaceBetween: 40,
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    sensitivity: 1,
  },
  navigation: {
    nextEl: '.reviews__swiper-button-next', // кнопка вперед
    prevEl: '.reviews__swiper-button-prev' //  кнопка назад
  },
  slidesPerGroup: 1,
  loop: true,
});

import Swiper from 'swiper';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';

const juriBtnNext = document.querySelector('.juri__swiper-button-next');
const juriBtnPrev = document.querySelector('.juri__swiper-button-prev');

const juriKeydownBtn = (button) => {
  button.addEventListener('keydown', (evt) => {
    if (evt.key === ' ' || evt.key === 'Spacebar') {
      evt.preventDefault();
      button.click();
    }
  });
};

juriKeydownBtn(juriBtnNext);
juriKeydownBtn(juriBtnPrev);

export const swiperJuri = new Swiper('.juri__swiper', {
  modules: [Navigation, Pagination, Keyboard], //подключаем модуль навигации по кнопкам
  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  navigation: {
    nextEl: '.juri__swiper-button-next', // кнопка вперед
    prevEl: '.juri__swiper-button-prev' //  кнопка назад
  },
  slidesPerGroup: 1,
  loop: true,
});

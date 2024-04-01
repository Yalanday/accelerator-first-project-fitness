import Swiper from 'swiper';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';


const reviewsBtnNext = document.querySelector('.reviews__swiper-button-next');
const reviewsBtnPrev = document.querySelector('.reviews__swiper-button-prev');

const reviewsKeydownBtn = (button) => {
  button.addEventListener('keydown', (evt) => {
    if (evt.key === ' ' || evt.key === 'Spacebar') {
      evt.preventDefault();
      button.click();
    }
  });
};

reviewsKeydownBtn(reviewsBtnNext);
reviewsKeydownBtn(reviewsBtnPrev);

export const swiperReview = new Swiper('.reviews__swiper', {
  modules: [Navigation, Pagination, Keyboard],
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
  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev'
  },
  slidesPerGroup: 1,
  loop: false,
});

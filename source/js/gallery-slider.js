import { Swiper } from './vendor/swiper';
import { Navigation } from './vendor/modules';

const reviewsSlider = new Swiper ('.gallery__swiper', {
  modules: [ Navigation ],
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.gallery__button--next',
    prevEl: '.gallery__button--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
      allowTouchMove: true,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 5,
      allowTouchMove: false,
    },
  },
});

export { reviewsSlider };

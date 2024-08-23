import { Swiper } from './vendor/swiper';
import { Navigation } from './vendor/modules';

const reviewsSlider = new Swiper ('.reviews__swiper', {
  modules: [ Navigation ],
  direction: 'horizontal',
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
    disabledClass: 'primary-slider-button--disabled',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 1.6,
      spaceBetween: 120,
      allowTouchMove: false,
    },
  },
});

export { reviewsSlider };

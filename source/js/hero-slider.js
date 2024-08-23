import { Swiper } from './vendor/swiper';
import { Pagination } from './vendor/modules';

const promoSlider = new Swiper('.hero__swiper', {
  modules: [Pagination],
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    320: {
      pagination: false,
      allowTouchMove: true,
    },
    768: {
      pagination: false,
      allowTouchMove: true,
    },
    1440: {
      pagination: {
        el: '.hero__pagination',
        bulletClass: 'hero__pagination-bullet',
        bulletActiveClass: 'hero__pagination-bullet--is-active',
        type: 'bullets',
        clickable: true,
      },
      allowTouchMove: false,
    },
  },
});

export { promoSlider };

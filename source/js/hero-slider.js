import { Swiper } from './vendor/swiper';
// import { Pagination } from './vendor/modules';

const promoSlider = new Swiper ('.hero__swiper', {
//   modules: [ Pagination ],
  direction: 'horizontal',
  loop: 'true',
  slidesPerView: 'auto',
//   pagination: {
//     el: '.hero__pagination',
//     type: 'bullets',
//     clickable: true,
//   },
});

export { promoSlider };

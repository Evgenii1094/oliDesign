import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const reviewSlide = new Swiper('.review__slider-container', {
    navigation: {
        nextEl: '.review__button-next',
        prevEl: '.review__button-prev',
    },
    pagination: {
        el: '.review__swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
});

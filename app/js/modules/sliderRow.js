'use strict';

import swiper from 'swiper';

const swiperOptions = {
	//Slides grid
	slidesPerView: 3,
	//Breakpoints
	breakpoints: {
		320: {
			slidesPerView: 1,
			spacebetween: 10
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 20
		}
	},
	//Navigation Buttons
	nextButton: '.slider__button-next',
	prevButton: 'slider__button-prev',
	//Accessability
	ally: true,
	//NameSpace
	containerModifierClass: 'slider-',
	slideClass: 'slider__slide',
	slideActiveClass: 'slider__slide--active',
	slideDuplicatedActiveClass: 'slider__slide--duplicate',
	sliderVisibleClass: 'slider__slide--visible',
	sliderDuplicateClass: 'slider__slide--duplicate',
	sliderNextClass: 'slider__slide--next',
	sliderDuplicatedNextClass: 'slider__slide--duplicate-next',
	sliderPrevClass: 'slider__slide--prev',
	sliderDuplicatedPrevClass: 'slider__slide--duplicate-prev',
	wrapperClass: 'slider__wrapper',
	bulletClass: 'slider__bullet',
	bulletActiveClass: 'slider__bullet--active',
	paginationHiddenClass: 'slider__pagination--hidden',
	paginationCurrentClass: 'slider__pagination--current'
};

function initSliderRow() {
	const swiperInit = new Swiper('.slider-row__slider', swiperOptions);
}

export default initSliderRow;
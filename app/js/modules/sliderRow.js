'use strict';

import swiper from 'swiper';

const swiperOptions = {
	//Slides grid
	slidesPerView: 3,
	spaceBetween: 10,
	//Breakpoints
	breakpoints: {
		640: {
			sliderPerView: 1,
			spaceBetween: 10
		}
	},
	//Navigation Buttons
	nextButton: '.slider-row__button-next',
	prevButton: '.slider-row__button-prev',
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
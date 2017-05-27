'use strict';

import swiper from 'swiper';

const root = document.querySelector('.slider-row');
const prevButton = root.querySelector('.slider-row__button-prev');
const nextButton = root.querySelector('.slider-row__button-next');

var swiperOptions = {
	//Slides grid
	slidesPerView: 3,
	spaceBetween: 10,
	//Breakpoints
	breakpoints: {
		498: {
			slidesPerView: 1,
		},
		996: {
			slidesPerView: 2
		}
	},
	//Navigation Buttons
	nextButton: nextButton,
	prevButton: prevButton,
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
	paginationCurrentClass: 'slider__pagination--current',
	buttonDisabledClass: 'nav-buttons--disabled'
};

initSliderRow();

function initSliderRow() {
	const swiper = new Swiper('.slider-row__slider', swiperOptions);
}
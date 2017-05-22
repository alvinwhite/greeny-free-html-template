'use strict';

import swiper from 'swiper';
import PubSub from 'pubsub-js';

const root = document.querySelector('.testimonials');
const slider = root.querySelector('.testimonials__slider');
const pagination = root.querySelector('.testimonials__pagination');


var swiperOptions = {
	//Pagination
	pagination: pagination,
	paginationClickable: true,
	//Accessability
	ally: true,
	//Navigation Buttons
	nextButton: '.testimonials__button-next',
	prevButton: '.testimonials__button-prev',
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
	bulletClass: 'slider-bullet--testimonials',
	bulletActiveClass: 'slider__bullet--active',
	paginationHiddenClass: 'slider__pagination--hidden',
	paginationCurrentClass: 'slider__pagination--current'
};

PubSub.subscribe('init', initTestominals);

function initTestominals() {
	const swiperInit = new Swiper(slider, swiperOptions);
}

export default initTestominals;
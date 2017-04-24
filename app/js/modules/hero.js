'use strict';

import swiper from 'swiper';

const imageCollection = document.getElementsByClassName('slider__img');
const swiperOptions = {
	//Pagination
	pagination: '.slider__pagination',
	paginationClickable: true,
	//Effects
	effect: 'fade',
	//Accessability
	ally: true,
	// Loop
	loop: true,
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


/**
 * Adjust height of slider images
 * use as a polyfill for browsers not supporting calc and vh
 * @param  {array} images HTMLCollection or NodeList
 * @return {object}       Returns null if no arguments are passed
 */
function adjustImages(images) {
	const h = window.innerHeight - 70;
	const w = window.innerWidth;
	
	if(!images) return null;

		for (let i = 0; i < images.length; i++) {
			images[i].style.height = h + 'px';
		}

};


function initHero() {
	const swiperInit = new Swiper('.hero__slider', swiperOptions);
	/*
	adjustImages(imageCollection);

	window.addEventListener('resize', () => adjustImages(imageCollection));
	window.addEventListener('orientationchange', () => {
		adjustImages(imageCollection);
	});
	*/


}

export default initHero;
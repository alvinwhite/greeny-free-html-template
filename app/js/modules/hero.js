'use strict';

import PubSub from 'pubsub-js';
import swiper from 'swiper';

var imageCollection = document.getElementsByClassName('slider__img');
var swiperOptions = {
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
	bulletClass: 'slider__bullet--hero',
	bulletActiveClass: 'slider__bullet--active',
	paginationHiddenClass: 'slider__pagination--hidden',
	paginationCurrentClass: 'slider__pagination--current'
};

PubSub.subscribe("init", initHero);

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

/**
 * Adjust height of slider images
 * use as a polyfill for browsers not supporting calc and vh
 * @param  {array} images HTMLCollection or NodeList
 * @return {object}       Returns null if images is falsy 
 */
function adjustImages(images) {
	const h = window.innerHeight - 70;
	const w = window.innerWidth;
	
	if(!images) return null;
	if(!images.forEach) images = Array.from(images);

	images.forEach((img) => {
		img.style.height = h + 'px';
	});

};


export default initHero;
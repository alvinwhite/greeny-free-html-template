import swiper from 'swiper';

const imageCollection = document.getElementsByClassName('slider__img');
const swiperOptions = {
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

function adjustImages(images) {
	const h = window.innerHeight - 70;
	
	for (let i = 0; i < images.length; i++) {
		images[i].style.height = h + 'px';
	};
	
};

function initHero() {
	const swiperInit = new Swiper('.hero__slider', swiperOptions);
	
	adjustImages(imageCollection);

}

export default initHero;
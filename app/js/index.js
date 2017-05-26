'use strict';

import PubSub from 'pubsub-js';
import ScrollMagic from 'scrollmagic';
import "core-js/library/fn/array/from"; 

import preloader from './modules/preloader.js';
import navBarInit from './modules/nav-bar.js';
import searchScreenInit from './modules/search-screen.js';
import mainMenuInit from './modules/main-menu.js';
import heroInit from './modules/hero.js';
import asideImageInit from './modules/aside-image.js';
import sliderRowInit from './modules/slider-row.js';
import treeTabsInit from './modules/tree-tabs.js';
import numbersRowInit from './modules/numbers-row.js';
import teamCardsInit from './modules/team-cards.js';
import newsRowInit from './modules/news-row.js';
import galleryInit from './modules/gallery.js';
import testimonialsInit from './modules/testimonials.js';

const PAGE_EVENTS = {
	init: 'init',
	windowResized: 'windowResized',
	windowLoaded: 'windowLoaded'
};
const animationController = new ScrollMagic.Controller();

preloader();

PubSub.publish(PAGE_EVENTS.init);

window.addEventListener('resize', function() {
	PubSub.publish(PAGE_EVENTS.windowResized, {
		isMobile: this.innerWidth <= 991
	});
});

window.addEventListener('load', function() {
	PubSub.publish(PAGE_EVENTS.windowLoaded);
});



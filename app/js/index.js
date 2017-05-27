'use strict';

import PubSub from 'pubsub-js';
import ScrollMagic from 'scrollmagic';

// Polyfills 
import "core-js/library/fn/array/from";
import "core-js/library/fn/array/for-each";  

import { PAGE_EVENTS } from './constants';

import './modules/preloader';
import './modules/nav-bar';
import './modules/search-screen';
import './modules/main-menu';
import './modules/hero';
import './modules/aside-image';
import './modules/slider-row';
import './modules/tree-tabs';
import './modules/numbers-row';
import './modules/team-cards';
import './modules/news-row';
import './modules/gallery';
import './modules/testimonials';

const animationController = new ScrollMagic.Controller();

PubSub.publish(PAGE_EVENTS.init);

window.addEventListener('resize', function() {
	PubSub.publish(PAGE_EVENTS.windowResized, {
		isMobile: this.innerWidth <= 991
	});
});

window.addEventListener('load', function() {
	PubSub.publish(PAGE_EVENTS.windowLoaded);
});



'use strict';

import PubSub from 'pubsub-js';
import './modules/preloader';
import './modules/nav-bar';
import './modules/search-screen';
import './modules/main-menu';
import './modules/testimonials';

import { PAGE_EVENTS } from './constants';

PubSub.publish(PAGE_EVENTS.init);

window.addEventListener('resize', function() {
	PubSub.publish(PAGE_EVENTS.windowResized, {
		isMobile: this.innerWidth <= 991
	});
});

window.addEventListener('load', function() {
	PubSub.publish(PAGE_EVENTS.windowLoaded);
});


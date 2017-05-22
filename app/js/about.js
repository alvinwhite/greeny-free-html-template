'use strict';

import PubSub from 'pubsub-js';
import preloader from './modules/preloader.js';
import navBarInit from './modules/nav-bar.js';
import searchScreenInit from './modules/search-screen.js';
import mainMenuInit from './modules/main-menu.js';

const PAGE_EVENTS = {
	init: 'init',
	windowResized: 'windowResized',
	windowLoaded: 'windowLoaded'
};

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


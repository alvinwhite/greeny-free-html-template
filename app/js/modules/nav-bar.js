'use strict';

import { TweenLite, TimelineLite } from 'gsap';
import PubSub from 'pubsub-js';

import getSearchBarTl from './search-bar.js';
import toggleSbVisibility from './search-bar.js';

import searchScreenTl from './search-screen.js';
import menuScreenTl from './menu-screen.js';

import { toggleTlDirection } from '../common.js';

// {Singleton} for the sake of coolness, of course
// also because you cannot make this kind of
// assignment with an object litteral
class NavBarDOM {

	constructor() {
		this.root = document.querySelector('.nav-bar');
		this.menuBtn = this.root.querySelector('.nav-bar__menu-button');
		this.searchBtn = this.root.querySelector('.nav-bar__search-button');
		this.searchBar = this.root.querySelector('.nav-bar__search-bar');
		this.menu = this.root.querySelector('.nav-bar__menu');
	}

}

const DOM = new NavBarDOM();
const EVENTS = {
	pageInit: 'init',
	windowResized: 'windowResized',
	searchSubmited: 'searchSubmited'
};


// Get timelines and tweens for animation
var searchBarTl = getSearchBarTl(DOM.searchBar);
var hideMenuTween = getFadeOutTween(DOM.menu);
var desktopSearchTl = new TimelineLite({ paused: true, reversed: true })
	.add(hideMenuTween.play())
	.call(() => {
		DOM.menu.classList.toggle('main-menu--hidden');
	})
	.add(searchBarTl.play());

// Module states
var searchSubmited = false;

//Sub to the page events 
PubSub.subscribe(EVENTS.pageInit, initNavBar);
PubSub.subscribe(EVENTS.windowResized, handleWindowResize);

function initNavBar() {

	DOM.searchBar.addEventListener('submit', function(e) {
		e.preventDefault();

		PubSub.publish(EVENTS.searchSubmited, {
			form: this,
			desktop: true
		});

		searchSubmited = true;

	});

	DOM.menuBtn.addEventListener('click', handleMenuBtnClick);
	DOM.searchBtn.addEventListener('click', handleSearchBtnClick);

}

function handleWindowResize(eName, data) {

	var isMobile = data.isMobile;
	var desktopPlayed = desktopSearchTl.progress() > 0;
	var screenPlayed = searchScreenTl.progress() > 0;

	if (isMobile && desktopPlayed) {

		toggleSbVisibility(DOM.searchBar);
		toggleTlDirection(desktopSearchTl);
		toggleTlDirection(searchScreenTl);

	} else if (!isMobile && screenPlayed) {

		toggleTlDirection(searchScreenTl);
		toggleTlDirection(desktopSearchTl);

	}

}

function handleSearchBtnClick() {

	var isMobile = window.innerWidth <= 991;

	if(searchSubmited) {
		PubSub.publish('closeResultsScreen');
		searchSubmited = false;
	}

	this.classList.toggle('search-button--active');

	if (isMobile) {
		toggleTlDirection(searchScreenTl);
	} else {
		toggleTlDirection(desktopSearchTl);
	}

}

function handleMenuBtnClick() {
	this.classList.toggle('menu-button--active');
	toggleTlDirection(menuScreenTl);
}

function getFadeOutTween(el) {
	return TweenLite.to(el, 0.35, {
		autoAlpha: 0,
		paused: true
	});
}

export default initNavBar;
import { TweenLite, TimelineLite } from 'gsap';
import PubSub from 'pubsub-js';

import getSearchBarTl from './search-bar.js';
import toggleSbVisibility from './search-bar.js';

import searchScreenTl from './search-screen.js';
import menuScreenTl from './menu-screen.js';

var body = document.querySelector('.page');
var navBar = document.querySelector('.nav-bar');

var menuBtn = navBar.querySelector('.nav-bar__menu-button');
var searchBtn = navBar.querySelector('.nav-bar__search-button');
var searchBar = navBar.querySelector('.nav-bar__search-bar');
var menu = navBar.querySelector('.nav-bar__menu');

var searchInput = searchBar.querySelector('.search-bar__input');
var searchBarBottomLine = searchBar.querySelector('.search-bar__bottom-line');
var submitSearchBtn = searchBar.querySelector('.search-bar__submit');
var submitSearchIcon = submitSearchBtn.firstChild;

var searchBarTl = getSearchBarTl(
	searchBarBottomLine,
	searchInput,
	submitSearchBtn,
	searchBar);
var hideMenuTween = getHideMenuTween(menu);
var desktopSearchTl = new TimelineLite({ paused: true, reversed: true });

desktopSearchTl.add(hideMenuTween)
	.call(toggleMenuVisibility, [menu])
	.add(searchBarTl.play());

PubSub.subscribe("init", initNavBar);

function initNavBar() {

	menuBtn.addEventListener('click', handleMenuBtnClick);
	searchBtn.addEventListener('click', handleSearchBtnClick);
	window.addEventListener('resize', handleWindowResize);

}

function handleWindowResize() {

	var isMobile = window.innerWidth <= 991;
	var desktopPlayed = desktopSearchTl.progress() > 0;
	var screenPlayed = searchScreenTl.progress() > 0;

	if (isMobile && desktopPlayed) {

		toggleSbVisibility(searchBar);
		toggleTlDirection(desktopSearchTl);
		toggleTlDirection(searchScreenTl);

	} else if (!isMobile && screenPlayed) {

		toggleTlDirection(searchScreenTl);
		toggleTlDirection(desktopSearchTl);

	}
}

function handleSearchBtnClick() {

	var isMobile = window.innerWidth <= 991;
	var isActive = this.classList.contains('search-button--active');
	var screenPlayed = searchScreenTl.progress() > 0;
	var desktopPlayed = desktopSearchTl.progress() > 0;

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


function getHideMenuTween(menu) {
	return TweenLite.to(menu, 0.35, {
		opacity: 0,
	});
}

function toggleMenuVisibility(menu) {
	menu.classList.toggle('main-menu--hidden');
}

function toggleTlDirection(tl) {
	tl.reversed() ? tl.play() : tl.reverse();
}

export default initNavBar;

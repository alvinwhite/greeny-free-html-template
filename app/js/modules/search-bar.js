'use strict';

import { TimelineLite } from 'gsap';

function getShowSearchBarTl(searchBar) {

	var input = searchBar.querySelector('.search-bar__input');
	var line = searchBar.querySelector('.search-bar__bottom-line');
	var button = searchBar.querySelector('.search-bar__submit') || false;

	var tl = new TimelineLite({ paused: true });

	tl
		.call(toggleVisibility, [searchBar])
		.from(line, 0.6, { width: '0%', display: 'none' })
		.from(input, 0.5, { autoAlpha: 0, display: 'none' });

	if (button) {
		tl.from(button, 0.8, { autoAlpha: 0, rotationX: 360, display: 'none' }, "-=0.8");
	}

	return tl;

}

function toggleVisibility(searchBar) {
	searchBar.classList.toggle('search-bar--visible');
	searchBar.classList.toggle('search-bar--hidden');
}

export {
	getShowSearchBarTl as default,
	toggleVisibility as toggleSbVisibility
};

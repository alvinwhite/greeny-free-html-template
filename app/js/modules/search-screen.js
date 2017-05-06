import PubSub from 'pubsub-js';
import {TweenLite, TimelineLite} from 'gsap';
import getSearchBarTl from './search-bar.js';

var page = document.querySelector('.page');
var searchScreen = document.querySelector('.search-screen');

var resultsItems = searchScreen.querySelectorAll('.search-results__item');
var heading = searchScreen.querySelector('.search-screen__heading');
var searchBar = searchScreen.querySelector('.search-bar');

var searchInput = searchBar.querySelector('.search-bar__input');
var searchBottomLine = searchBar.querySelector('.search-bar__bottom-line');


var mainTl = new TimelineLite({paused: true, reversed: true});

var searchBarTl = getSearchBarTl(
	searchBottomLine,
	searchInput,
	false,
	searchBar
);

var resultsItemsTl = getResultItemsTl(resultsItems);
var showScreen = getShowScreenTl(page, searchScreen);
var showHeading = getShowHeadingTween(heading);

mainTl.add(showScreen.play())
			.add(showHeading)
			.add(searchBarTl.play())
			.add(resultsItemsTl.play());

function getShowScreenTl(page, searchScreen) {
	return new TimelineLite({paused: true})
		.set(page, { overflow: 'hidden' })
		.to(searchScreen, 0.5, {
			width: '100%',
			display: 'block'
		});
}

function getShowHeadingTween(heading) {
	return TweenLite.from(heading, 0.3, {
		autoAlpha: 0,
		display: 'none'
	});
}

function getResultItemsTl(resultsItems) {
	return new TimelineLite({paused: true})
		.staggerFrom(resultsItems, 0.6, {
			autoAlpha: 0,
			display: 'none'
		}, 0.2);
}

export default mainTl;



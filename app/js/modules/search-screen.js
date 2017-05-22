import PubSub from 'pubsub-js';
import {TweenLite, TimelineLite} from 'gsap';

import {moduleEvents as NAV_EVENTS} from './nav-bar.js';
import getSearchBarTl from './search-bar.js';

class SearchScreenDOM {

	constructor() {
		this.root = document.querySelector('.search-screen');
		this.resultsItems = this.root.querySelectorAll('.search-results__item');
		this.heading = this.root.querySelector('.search-screen__heading');
		this.searchBar = this.root.querySelector('.search-bar');
	}

}

var page = document.querySelector('.page');
const DOM = new SearchScreenDOM();

var mainTl = new TimelineLite({ paused: true, reversed: true });

var searchBarTl = getSearchBarTl(DOM.searchBar);
var resultsItemsTl = getResultItemsTl(DOM.resultsItems);
var showScreenTl = getShowScreenTl(page, DOM.searchScreen);
var showHeading = getShowHeadingTween(DOM.heading);

mainTl
	.add(showScreenTl.play())
	.add(showHeading.play())
	.add(searchBarTl.play())
	.add(resultsItemsTl.play());

var onSubmitTl = new TimelineLite({ paused: true })
	.add(getShowScreenTl(page, DOM.searchScreen).play())
	.add(getShowHeadingTween(DOM.heading).play())
	.add(getResultItemsTl(DOM.resultsItems).play());			


PubSub.subscribe('searchSubmited', (eventName, data) => {
	if(!data.desktop) return false;
	onSubmitTl.play();
});

PubSub.subscribe('closeResultsScreen', () => {
	onSubmitTl.reverse();
});


function getShowScreenTl(page, searchScreen) {
	return new TimelineLite({ paused: true })
		.set(page, { overflow: 'hidden' })
		.to(DOM.root, 0.4, {
			width: '100%',
			display: 'block'
		});
}

function getResultItemsTl(resultsItems) {
	return new TimelineLite({ paused: true })
		.staggerTo(DOM.resultsItems, 0.4, {
			autoAlpha: 1,
			display: 'flex'
		}, 0.2);
}

function getShowHeadingTween(heading) {
	return TweenLite.to(DOM.heading, 0.3, {
		autoAlpha: 1,
		display: 'block',
		paused: true 
	});
}

function toggleTlDirection(tl) {
	tl.reversed() ? tl.play() : tl.reverse();
}


export default mainTl;
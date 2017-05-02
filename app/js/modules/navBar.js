import {TweenLite, TimelineLite} from 'gsap';

var navBar = document.querySelector('.nav-bar');
var openSearchButton = navBar.querySelector('.nav-bar__search-button');
var searchBar = navBar.querySelector('.nav-bar__search-bar');
var submitSearchButton = searchBar.querySelector('.nav-bar__search-submit');
var submitSearchIcon = submitSearchButton.firstChild;
var searchInput = searchBar.querySelector('.nav-bar__search-input');
var searchBarBottomLine = searchBar.querySelector('.nav-bar__bottom-line');

function getSearchBarTimeline(line, input, icon) {
	var tl = new TimelineLite({paused: true});

	tl.add( TweenLite.from(line, 1, {width: 0, opacity: 0}));
	tl.add( TweenLite.from(input, 1, {opacity: 0}));
	tl.add( TweenLite.from(icon, 1, {transform: 'rotateX(180deg)'}));

	return tl; 
}

function initNavBar() {

	getSearchBarTimeline(searchBarBottomLine, searchInput, submitSearchButton).play();

}


export default initNavBar;
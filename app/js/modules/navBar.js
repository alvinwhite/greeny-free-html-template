import {TweenLite, TimelineLite} from 'gsap';

var navBar = document.querySelector('.nav-bar');
var searchButton = navBar.querySelector('.search-button');
var searchBar = navBar.querySelector('.nav-bar__search-bar');
var menu = navBar.querySelector('.nav-bar__menu');
var submitSearchButton = searchBar.querySelector('.nav-bar__search-submit');
var submitSearchIcon = submitSearchButton.firstChild;
var searchInput = searchBar.querySelector('.nav-bar__search-input');
var searchBarBottomLine = searchBar.querySelector('.nav-bar__bottom-line');

var tl = new TimelineLite({paused: true});

tl.to(menu, 0.35, {
		opacity: 0,
		onComplete: () => {
			menu.classList.add('main-menu--hidden');
			searchBar.classList.add('nav-bar__search-bar--visible');
		}
	})
	.to(searchBarBottomLine, 0.6, {
		width: '100%',
		onReverseComplete: () => {
			searchBar.classList.remove('nav-bar__search-bar--visible');
			menu.classList.remove('main-menu--hidden');
		}
	})
	.from(searchInput, 0.5, {opacity: 0})
	.from(submitSearchButton, 0.8, {opacity: 0, rotationX: 360}, "-=0.8" );


function searchButtonClicked(e) {

	this.classList.toggle('search-button--active');
	
	if(this.classList.contains('search-button--active')) {
		tl.play();
	} else {
		tl.reverse();
	}

}

function initNavBar() {
	searchButton.addEventListener('click', searchButtonClicked);
}

export default initNavBar;

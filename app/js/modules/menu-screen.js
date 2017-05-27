import {TweenLite, TimelineLite} from 'gsap';

var page = document.querySelector('.page');
var menuScreen = document.querySelector('.menu-screen');
var mainTl = getShowMenuScreenTl(menuScreen);

function getShowMenuScreenTl(menuScreen) {
	return new TimelineLite({paused: true, reversed: true})
		.to(menuScreen,0.5, {
			height: '100vh',
			display: 'flex'
		}); 
}

export default mainTl;
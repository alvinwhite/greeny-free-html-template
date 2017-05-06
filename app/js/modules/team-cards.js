import {TweenLite, TimelineLite} from 'gsap';
import PubSub from 'pubsub-js';

var cards = document.querySelectorAll('.team-card');

PubSub.subscribe("init", initTeamCards);

function initTeamCards() {
	animateButtonHover();
}

function animateButtonHover() {

	cards.forEach((el, i) => {
		let button = el.querySelector('.team-card__button');
		let stripeNodes = el.querySelectorAll('.team-card__stripes');
		let leftTimeline = getStripesTimeline(stripeNodes[0].children);
		let rightTimeline = getStripesTimeline(stripeNodes[1].children);

		button.addEventListener('mouseover', function() {
			leftTimeline.play();
			rightTimeline.play();
		});

		button.addEventListener('mouseout', function() {
			leftTimeline.reverse();
			rightTimeline.reverse();
		});

	});
}


function getStripesTimeline(stripeNode) {
	var tl = new TimelineLite({paused: true});

	tl.add( TweenLite.to([stripeNode[0], stripeNode[2]], 0.2, {
		width: '35px'
	}));

	tl.add( TweenLite.to(stripeNode[1], 0.2, {
		width: '25px'
	}));

	return tl;
}

export default initTeamCards;
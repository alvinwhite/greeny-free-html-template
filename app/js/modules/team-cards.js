import { TweenMax, TweenLite, TimelineLite } from 'gsap';
import PubSub from 'pubsub-js';

const root = document.querySelector('.team-cards');
const cards = root.querySelectorAll('.team-card');

const leftStripes = root.querySelector('.team-cards__stripes--left');
const middleStripes = root.querySelector('.team-cards__stripes--middle');
const rightStripes = root.querySelector('.team-cards__stripes--right');

initTeamCards();

function initTeamCards() {
	animateButtonHover();
}

function animateButtonHover() {

	cards.forEach((el, i) => {
		let button = el.querySelector('.team-card__button');
		let stripeNodes = el.querySelectorAll('.team-card__stripes');
		let leftTl = getStripesTl(stripeNodes[0].children);
		let rightTl = getStripesTl(stripeNodes[1].children);

		button.addEventListener('mouseover', function () {
			leftTl.play();
			rightTl.play();
		});

		button.addEventListener('mouseout', function () {
			leftTl.reverse();
			rightTl.reverse();
		});

	});
}

function getStripesTl(stripeNode) {
	var tl = new TimelineLite({ paused: true });

	tl.add(TweenLite.to([stripeNode[0], stripeNode[2]], 0.2, {
		width: '35px'
	}));

	tl.add(TweenLite.to(stripeNode[1], 0.2, {
		width: '25px'
	}));

	return tl;
}

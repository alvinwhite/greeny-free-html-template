import {TweenLite, TimelineLite} from 'gsap';
import PubSub from 'pubsub-js';

var section = document.querySelector('.numbers-row');
var numbers = section.querySelectorAll('.numbers-row__number');
var startCounter = {counter: 0};

PubSub.subscribe("init", initNumbersRow);

function initNumbersRow() {
	getCountingTimeline().play();
}

function getCountingTimeline() {
	var tl = new TimelineLite({paused: true});

	numbers.forEach((number, i) => {

		let signNeeded = number.hasAttribute('data-sign');
		let finalValue = Number(number.getAttribute('data-count-to'));
		let localCounter = Object.assign(startCounter);

		tl.add( TweenLite.to(localCounter, 1, {
			counter: finalValue,
			roundProps: 'counter',
			onUpdate: () => {
				number.innerHTML = localCounter.counter;
			},
			onComplete: signNeeded ? addPlusSign : false ,
			onCompleteParams: [number]
		}));

	});

	return tl;

}


function addPlusSign(number) {
	number.innerHTML += '+';  
}

export default initNumbersRow;
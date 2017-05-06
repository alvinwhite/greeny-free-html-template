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

	numbers.forEach((el, i) => {

		let signNeeded = el.hasAttribute('data-sign');
		let finalValue = Number(el.getAttribute('data-count-to'));
		let localCounter = Object.assign(startCounter);

		tl.add( TweenLite.to(localCounter, 1, {
			counter: finalValue,
			roundProps: 'counter',
			onUpdate: updateDOMValue,
			onUpdateParams: [el, localCounter],
			onComplete: signNeeded ? addPlusSign : false ,
			onCompleteParams: [el]
		}) );

	});

	return tl;

}

function addPlusSign(el) {
	el.innerHTML += '+';  
}

function updateDOMValue(el, localCounter) {
	el.innerHTML = localCounter.counter;
}


export default initNumbersRow;
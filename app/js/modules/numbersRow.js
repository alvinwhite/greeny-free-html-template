import {TweenLite, TimelineLite} from 'gsap';

var section = document.querySelector('.numbers-row');
var numbers = section.querySelectorAll('.numbers-row__number');
var startCounter = {counter: 0};

function getMainTimeline() {
	var tl = new TimelineLite({paused: true});

	numbers.forEach((el, i) => {

		let signNeeded = Boolean(el.getAttribute('data-sign'));
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

export default function () {
	getMainTimeline().play();
}
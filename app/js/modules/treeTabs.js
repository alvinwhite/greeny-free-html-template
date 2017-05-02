
import {TweenLite, TimelineLite} from 'gsap';

var section = document.querySelector('.tree-tabs');

var boxes = section.querySelectorAll('.tree-tabs__tab-box');
var controlsWrapper = section.querySelector('.tree-tabs__tab-controls');
var controls = Array.from(controlsWrapper.children);

var activeControlClass = 'tab-controls__control--active';
var activeBoxClass = 'tab-box--active';

function handleControlClick(e) {

	e.preventDefault();
	var target = e.target;

	while(target != this) {
		if(target.hasAttribute('data-index')) {

			var currentIndex = Number(target.getAttribute('data-index'));
			appendActive(controls, currentIndex, activeControlClass);
			appendActive(boxes, currentIndex, activeBoxClass);

		}
		target = target.parentNode;
	}

}

function appendActive(items, index, activeClass) {

	if(!items) return false;

	items.forEach((item) => {

		let dataIndex = Number(item.getAttribute('data-index'));
		let isActive = item.classList.contains(activeBoxClass);

		if( dataIndex === index && !isActive ) {
			item.classList.add(activeClass);
		} else if( dataIndex !== index ) {
			item.classList.remove(activeClass);
		}

	});

}

function indexItems(...items) {

	items.forEach((item) => {
		if(!item) return false;

		item.forEach((el, i) => {
			if(!el.hasAttribute('data-index')) {
				el.setAttribute('data-index', i);
			}
		});

	});
}

function initTreeTabs() {
	indexItems(boxes, controls);
	controlsWrapper.addEventListener('click', handleControlClick);
}

export default initTreeTabs;

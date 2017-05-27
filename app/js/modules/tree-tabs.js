import { TweenMax, TimelineLite, Bounce} from 'gsap';
import PubSub from 'pubsub-js';

const section = document.querySelector('.tree-tabs');

const boxes = section.querySelectorAll('.tree-tabs__tab-box');
const controlsWrapper = section.querySelector('.tree-tabs__tab-controls');
const controls = Array.from(controlsWrapper.children);

const activeControlClass = 'tab-controls__control--active';
const activeBoxClass = 'tab-box--active';

initTreeTabs(); 

function initTreeTabs() {
	indexItems(boxes, controls);
	controlsWrapper
		.addEventListener('click', handleControlClick);
}

function handleControlClick(e) {
	e.preventDefault();
	var target = e.target;

	while(target != this) {
		if(target.hasAttribute('data-index')) {

			var currentIdx = Number(target.getAttribute('data-index'));
			appendActiveClass(controls, currentIdx, activeControlClass);
			appendActiveClass(boxes, currentIdx, activeBoxClass);

		}
		target = target.parentNode;
	}

}

function appendActiveClass(items, index, className) {
	if(!items) return false;

	items.forEach((item) => {

		let dataIndex = Number(item.getAttribute('data-index'));
		let isActive = item.classList.contains(activeBoxClass);

		if( dataIndex === index && !isActive ) {
			item.classList.add(className);
		} else if( dataIndex !== index ) {
			item.classList.remove(className);
		}

	});
}

function indexItems(...items) {
	items.forEach((item) => {
		if (!item) return false;

		item.forEach((el, i) => {
			if (!el.hasAttribute('data-index')) {
				el.setAttribute('data-index', i);
			}
		});

	});
}

export default initTreeTabs;

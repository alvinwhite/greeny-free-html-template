
var section = document.querySelector('.tree-tabs');
var boxes = section.querySelectorAll('.tree-tabs__tab-box');
var controls = section.querySelector('.tree-tabs__tab-controls').children;

controls = true;

function handleControlClick(e) {
	
}

function indexItems(...items) {

	items.forEach((item) => {

		if(!item) return false;
		if(!item.forEach) {

			try {
				item = Array.from(item);
			} catch(e) {
				console.log(e.message);
			}

		}

		item.forEach((el, i) => {
			el.setAttribute('data-index', i);
		});

	});

}



export default function () {
	indexItems(boxes, controls);
}
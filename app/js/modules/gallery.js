import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.js';
import mixItUp from 'mixitup';


var pswpElement = document.querySelector('.pswp');
var imgLinks = document.querySelectorAll('.gallery__img-links');
var imgContainer = document.querySelector('.gallery-grid');

function appendAttributes(links) {

	links.forEach((el, i) => {

		let dimensions = getDimensions(el.getAttribute("href")).then((dimensions) => {
			el.setAttribute('data-height', dimensions.h);
			el.setAttribute('data-width', dimensions.w);
		});

		el.setAttribute('data-index', i);
		
		el.childNodes.forEach((child) => child.setAttribute('data-index', i));
	});

};

function getDimensions(url) {

	var img = new Image();
	img.src = url;

	return new Promise((resolve, reject) => {
		img.addEventListener("load", function() {
			resolve({ w: this.naturalWidth, h: this.naturalHeight });
		});
	});

}

function openPhotoSwipe(index) {
	var elements = [];
	var options = {
		index: index 
	};

	imgLinks.forEach((el) => {

		let url = el.getAttribute("href");
		let w = el.getAttribute("data-width");
		let h = el.getAttribute("data-height");
		let thumbUrl;

		el.childNodes.forEach((child) => {
			if(child.hasAttribute("src")) {
				thumbUrl = child.getAttribute("src");
			}
		});

		elements.push({
			src: url,
			msrc: thumbUrl,
			w: w,
			h: h
		});

	});

	const pswp = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, elements, 
		options);
	pswp.init();

}

function initGallery() {

	appendAttributes(imgLinks);

	imgContainer.addEventListener("click", function(e) {	
		e.preventDefault();

		if(e.target !== e.currentTargetgallery) {
			openPhotoSwipe(Number(e.target.getAttribute("data-index")));
		}		

		e.stopPropagation();
	});

	var mixer = mixItUp(imgContainer, {
		classNames: {
			block: '',
			delineatorElement: '__',
			delineatorModifier: '--',
			elementFilter: 'inline-controls__link'
		}
});

}

export default initGallery;

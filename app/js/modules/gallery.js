import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.js';
import mixItUp from 'mixitup';

var pswpElement = document.querySelector('.pswp');
var imgContainer = document.querySelector('.gallery__img-grid');
var imgLinks = imgContainer.querySelectorAll('.gallery__img-links');

export default initGallery;

function initGallery() {

	initPhotoSwipe(imgContainer, imgLinks);

	var mixer = mixItUp(imgContainer, {
		classNames: {
			block: '',
			delineatorElement: '__',
			delineatorModifier: '--',
			elementFilter: 'inline-controls__link'
		}
	});

}

function initPhotoSwipe(container, links) {
	appendAttributes(links);
	container.addEventListener("click", handleLinkClick);
}


function handleLinkClick(e) {
	e.preventDefault();

		var target = e.target;

		while(target != this) {
			if(target.nodeType === 1 && target.hasAttribute('data-index')) {

				var currentIndex = Number(target.getAttribute('data-index'));
				openPhotoSwipe(currentIndex, imgLinks);

			}
			target = target.parentNode;
		}
		
}


function appendAttributes(links) {

	links.forEach((link, i) => {

		let dimensions = getDimensions(link.getAttribute("href")).then((dimensions) => {
			link.setAttribute('data-height', dimensions.h);
			link.setAttribute('data-width', dimensions.w);
		});

		link.setAttribute('data-index', i);
		
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

function openPhotoSwipe(index, links) {
	var images = [];
	var options = {
		index: index 
	};

	links.forEach((el) => {

		let url = el.getAttribute("href");
		let w = el.getAttribute("data-width");
		let h = el.getAttribute("data-height");
		let thumbUrl;

		el.childNodes.forEach((child) => {
			if(child.nodeType === 1 && child.hasAttribute("src")) {
				thumbUrl = child.getAttribute("src");
			}
		});

		images.push({
			src: url,
			msrc: thumbUrl,
			w: w,
			h: h
		});

	});

	const pswp = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, images, 
		options);
	pswp.init();

}







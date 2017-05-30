'use strict';

import PubSub from 'pubsub-js';
import {TweenMax, TimelineMax} from 'gsap';

const page = document.querySelector('.page');
const root = document.querySelector('.preloader');

const svg = root.querySelector('.preloader__svg');
const text = root.querySelector('.preloader__text');
const paths = svg.querySelectorAll('.preloader__path');

const pathsTl = new TimelineMax({repeat: -1})
	.staggerFrom(paths, .4, { opacity: 0 }, .2);

const onInitTl = new TimelineMax({paused: true})
	.set(page, {overflow: 'hidden'})
	.to(svg, .4, {opacity: 1})
	.to(text, .4, {scale: 1})
	.add(pathsTl);

const onLoadTl = new TimelineMax({paused: true})
	.to([svg,text], .4, {opacity: 0})
	.to(root, 1, {
		width: 0, 
		opacity: 0, 
		display: 'none'
	})
	.set(page, {'overflow': 'auto', 'overflow-x': 'hidden'});

preloaderInit();

function preloaderInit() {
	onInitTl.play();

	PubSub.subscribe('windowLoaded', () => {
		pathsTl.eventCallback('onUpdate', () => {
			onLoadTl.play();
		});
	});
}
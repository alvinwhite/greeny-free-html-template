'use strict';

import PubSub from 'pubsub-js';
import navBarInit from './modules/nav-bar.js';
import heroInit from './modules/hero.js';
import asideImageInit from './modules/aside-image.js';
import sliderRowInit from './modules/slider-row.js';
import treeTabsInit from './modules/tree-tabs.js';
import numbersRowInit from './modules/numbers-row.js';
import teamCardsInit from './modules/team-cards.js';
import newsRowInit from './modules/news-row.js';
import galleryInit from './modules/gallery.js';

var INIT = "init";

PubSub.publish(INIT);

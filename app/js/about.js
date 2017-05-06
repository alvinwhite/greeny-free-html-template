'use strict';

import PubSub from 'pubsub-js';
import navBarInit from './modules/nav-bar.js';

var INIT = "init";

PubSub.publish(INIT);
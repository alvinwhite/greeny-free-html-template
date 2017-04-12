'use strict';

/**
 * Requiring necessary plugins
 */

const del = require('del')

module.exports = function(options) {

	return () => {
		return del(options.dest);
	}

};
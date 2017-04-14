'use strict';

/**
 * Requiring necessary plugins
 */

const del = require('del');

module.exports = function(options) {

	if(!options.dest) throw new Error('Error in task ' + options.taskName + ': dest property must be specifed');

	return () => {
		return del(options.dest);
	};

};
'use strict';

/**
 * Requiring necessary plugins
 */

const browserSync = require('browser-sync').create();

module.exports = (options) => {

	return () => {
		browserSync.init({
			server: options.serverDir
		});
		
		browserSync.watch(options.watchDir).on('change', browserSync.reload);
	}
};
'use strict';

/**
 * Requiring necessary plugins
 */

const browserSync = require('browser-sync').create();

module.exports = (options) => {

	if(!options.serverDir) throw new Error('Error in task ' + options.taskName + ': serverDir property must be specifed');
	if(!options.watchDir) throw new Error('Error in task ' + options.taskName + ': watchDir property must be specifed');

	return () => {
		browserSync.init({
			server: {
				baseDir: options.serverDir,
				serveStaticOptions: {
					extensions: ["html"]
				}
			}
		});
		
		browserSync.watch(options.watchDir).on('change', browserSync.reload);
	};
};
'use strict';

/**
 * Requiring necessary plugins
 */

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = (options) => {

	if(!options.src) throw new Error('Error in task ' + options.taskName + ': src property must be specifed');
	if(!options.dest) throw new Error('Error in task ' + options.taskName + ': dest property must be specifed');
	if(!options.base) throw new Error('Error in task ' + options.taskName + ': base property must be specifed');

	return () => {
		return gulp.src(options.src)
					.pipe($.plumber({errorHandler: $.notify.onError(function(err) {
							return {
								title: 'Pug',
								message: err.message
							};
						})
					}))
					.pipe($.pug({
						basedir: options.base,
						pretty: isDev
					}))
					.pipe(gulp.dest(options.dest));

	};
};

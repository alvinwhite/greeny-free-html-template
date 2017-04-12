'use strict';

/**
 * Requiring necessary plugins
 */

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = (options) => {

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

	}
}

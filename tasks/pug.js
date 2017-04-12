'use strict';

/**
 * Requiring necessary plugins
 */

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

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
						basedir: options.base
					}))
					.pipe(gulp.dest(options.dest));

	}
}
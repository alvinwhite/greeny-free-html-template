'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');
const gulplog = require('gulplog');
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = (options) => {

	return (callback) => {

		return gulp.src(options.src)
					.pipe($.plumber({errorHandler: $.notify.onError(function(err) {
						return {
						 title: 'Webpack',
						 message: err.message
						};
					 })
					}))
					.pipe(named())
					.pipe(webpackStream(require(options.config)))
					.pipe(gulp.dest(options.dest))
					
	}
}
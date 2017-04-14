'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');
const gulplog = require('gulplog');
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = (options) => {

	if(!options.src) throw new Error('Error in task ' + options.taskName + ': src property must be specifed');
	if(!options.dest) throw new Error('Error in task ' + options.taskName + ': dest property must be specifed');
	if(!options.config) throw new Error('Error in task ' + options.taskName + ': config property must be specifed');

	return () => {

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
					.pipe(gulp.dest(options.dest));
					
	};
};
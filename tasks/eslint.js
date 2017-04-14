'use strict';

/**
 * Requiring necessary plugins
 */

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const fs = require('fs');

/**
 * Lint passed files using ESLint plugin
 * @param  {object} options An options object, must contain
 *                          path for cache, src and dest property
 * @return {function}       Function to be passed inside the task method
 */
module.exports = (options) => {

	if(!options.src) throw new Error('Error in task ' + options.taskName + ': src property must be specifed');

	return () => {

		return gulp.src(options.src, {since: gulp.lastRun(options.taskName)})
			.pipe($.eslint())
			.pipe($.eslint.format())
			.pipe($.eslint.failAfterError()); 
	};
};
'use strict';

/**
 * Requiring necessary plugins
 */

const gulp = require('gulp');

/**
 * Copy files from src to dest
 * @param  {object} options An options object, must contain at least
 *                          src and dest property
 * @return {function}       Function to be passed inside the task method
 */
module.exports = (options) => {

	if(!options.src) throw new Error('Error in task ' + options.taskName + ': src property must be specifed');
	if(!options.dest) throw new Error('Error in task ' + options.taskName + ': dest property must be specifed');

	return () => {
		return gulp.src(options.src, {since: gulp.lastRun(options.taskName)})
			.pipe(gulp.dest(options.dest));
	};

};

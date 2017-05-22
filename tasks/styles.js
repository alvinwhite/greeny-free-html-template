
'use strict';

/**
 * Requiring necessary plugins
 */

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
const cfg = require('../awesome.config.js');

module.exports = (options) => {

	function getPreprocessor() {

		if(options.preprocessor === 'sass') {
			return $.sass({
				outputStyle: 'expanded',
				includePaths: ['./node_modules/']
			});
		}

		if(options.preprocessor === 'stylus') {
			return $.stylus();
		}

		return $.if(false, $.plumber());

	}

	if(!options.src) throw new Error('Error in task ' + options.taskName + ': src property must be specifed');
	if(!options.dest) throw new Error('Error in task ' + options.taskName + ': dest property must be specifed');

	return () => {

		return gulp.src(options.src)
			.pipe($.plumber({errorHandler: $.notify.onError(function(err) {
					return {
						title: 'Styles',
						message: err.message
					};
				})
			}))
			.pipe($.if(isDev, $.sourcemaps.init()))
			.pipe(getPreprocessor())
			.pipe($.postcss())
			.pipe($.if(isDev, $.sourcemaps.write()))
			.pipe(gulp.dest(options.dest));
	};

};


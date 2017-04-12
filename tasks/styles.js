'use strict';

/**
 * Requiring necessary plugins
 */

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = (options) => {

	function getPreprocessor() {

		if(options.preprocessor === 'sass') {
			return $.sass();
		} else if(options.preprocessor === 'stylus') {
			return $.stylus();
		} else if(options.preprocessor === 'sugarss') {
			return $.if(false, $.plumber());
		}

	}

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
	}

}
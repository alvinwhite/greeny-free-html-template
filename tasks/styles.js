'use strict';

/**
 * Requiring necessary plugins
 */

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
const path = require('path');
const cfg = require('../awesome.config.js');

function getPreprocessor() {

		if(cfg.preprocessor === 'sass') {
			return $.sass({
				outputStyle: 'expanded',
				includePaths: ['./node_modules/']
			});
		}

		if(cfg.preprocessor === 'stylus') {
			return $.stylus();
		}

		return $.if(false, $.plumber());

	}

module.exports = (options) => {

	if(!options.src) throw new Error('Error in task ' + options.taskName + ': src property must be specifed');
	if(!options.dest) throw new Error('Error in task ' + options.taskName + ': dest property must be specifed');

	let preprocessor = getPreprocessor();

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
			.pipe(preprocessor)
			.pipe($.postcss())
			.pipe($.if(isDev, $.sourcemaps.write()))
			.pipe(gulp.dest(options.dest));
	};

};

'use strict';

/**
 * Requiring necessary plugins
 */

const gulp = require('gulp');
const $ = require('gulp-load-plugins')({
	rename: {
		'gulp-svg-sprite': 'svgSprite'
	}
});

module.exports = (options) => {

	if(!options.src) throw new Error('Error in task ' + options.taskName + ': src property must be specifed');
	if(!options.dest) throw new Error('Error in task ' + options.taskName + ': dest property must be specifed');

	return () => {
		return gulp.src(options.src)
			.pipe($.svgSprite({
				
				shape: {
					id: {
						separator: '__'
 					}
				},

				mode: {

					symbol: {
						dest: '.',
						sprite: 'symbol.svg',
						render: false,
						svg: {
							xmlDeclaration: false,
							doctypeDeclaration: false,
							rootAttributes: {
								style: 'display:none;',
								'aria-hidden': true
							}
						}
					}
					
				}

			}))
			.pipe(gulp.dest(options.dest));
	};

};
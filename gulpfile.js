'use strict';

/**
 * Requiring necessary plugins
 */

const gulp = require('gulp');

/**
 * Configuration and additional variables
 */

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
const cfg = require('./awesome.config.js');

/**
 * Helper functions
 */

/**
 * Requires and calls a task with the task name from the path
 * only when the task is actually called
 * @param  {string} taskName
 * @param  {string} path
 * @param  {object} options
 * @return {streamObject}
 */
function lazyRequireTask(taskName, path, options) {
	options = options || {};
	options.taskName = taskName;
	gulp.task(taskName, (callback) => {
		let task = require(path).call(this, options);
		return task(callback);
	});
}

/**
 * Lazy tasks' requiring
 */

lazyRequireTask('styles', './tasks/styles', {
	src: cfg.dirs.styles.src + '/index.sass',
	dest: cfg.dirs.styles.dest,
	preprocessor: cfg.preprocessor
});

lazyRequireTask('clear', './tasks/clear', {
	dest: cfg.dirs.styles.dest
});

lazyRequireTask('assets', './tasks/assets', {
	src: cfg.dirs.baseSrc + '/assets/**.*',
	dest: cfg.dirs.baseDest
});

lazyRequireTask('eslint', './tasks/eslint', {
	src: cfg.dirs.scripts.src + '/**/*.js'
});

lazyRequireTask('serve', './tasks/serve', {
	serverDir: cfg.dirs.baseDest,
	watchDir: cfg.dirs.baseDest + '/**/*.*'
});

lazyRequireTask('webpack', './tasks/webpack', {
	src: cfg.dirs.scripts.src + '/**/*.js',
	dest: cfg.dirs.scripts.dest,
	config: '../webpack.config.js'
});

lazyRequireTask('pug', './tasks/pug', {
	src: cfg.dirs.pages.src + '/*.pug',
	dest: cfg.dirs.pages.dest,
	base: cfg.dirs.baseSrc
});

/**
 * Combined tasks
 */

gulp.task('build', gulp.series(
		'clear',
		gulp.parallel('pug', 'styles', 'webpack'),
		'assets'
));

gulp.task('watch', function() {
	gulp.watch(cfg.dirs.pages.src + '/**/*.pug', gulp.series('pug'));
	gulp.watch(cfg.dirs.scripts.src + '/**/*.js', gulp.series('webpack'));
	gulp.watch(cfg.dirs.styles.src + '/**/*.*', gulp.series('styles'));
	gulp.watch('app/assets/**/*.*', gulp.series('assets'));
});

gulp.task('dev', gulp.series(
	'build',
	gulp.parallel('watch', 'serve')
));

gulp.task('prod', gulp.series('build', 'eslint'));

gulp.task('default', gulp.series('dev'));

gulp.task('test', gulp.series('default'))

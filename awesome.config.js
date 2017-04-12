'use strict';

module.exports = {
	preprocessor: 'sass',
	dirs: {
		baseSrc: 'app',
		baseDest: 'public',
		styles: {
			src: 'app/styles',
			dest: 'public'
		},
		scripts: {
			src: 'app/js',
			dest: 'public/js'
		},
		pages: {
			src: 'app',
			dest: 'public'
		}
	}
}
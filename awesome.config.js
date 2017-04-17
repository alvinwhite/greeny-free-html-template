'use strict';

module.exports = {
	preprocessor: 'sass',
	dirs: {
		baseSrc: 'app',
		baseDest: 'public',
		assets: {
			src: 'app/assets',
			dest: 'public/assets' 
		},
		styles: {
			src: 'app/styles',
			dest: 'public/assets/styles'
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
};
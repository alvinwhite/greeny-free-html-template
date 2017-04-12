const cfg = require('./awesome.config.js');
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

// Add custom plugins if you need them
const plugins = {};

if(isDev) {
	plugins['autoprefixer'] = {}
} else {
	plugins['cssnano'] = {}
}

module.exports = {
  plugins: plugins
}
'use strict';


const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;
const path = require('path');

module.exports = {
	entry: './app/js/index.js',
	watch: false,
	devtool: isDev ? 'cheap-module-inline-source-map' : null,
	module: {
		loaders: [{
			test: /\.js$/,
			include: path.join(__dirname, 'app'),
			loader: 'babel-loader'
		}]
	},
	output: {
		filename: 'bundle.js',
		publicPath: '/js/'
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		moduleDirectories: ['node_modules'],
		extensions: ['', '.js']
	}
};

if (!isDev) {
	module.exports.plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
					drop_console: true,
					unsafe: true
				}
			})
	);
}
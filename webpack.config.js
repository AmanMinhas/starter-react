var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: APP_DIR + '/components/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	resolve: {
		// This is so that you don't have to write the file extension while importing it.
		// Instead of import HomeComponent from './HomeComponent.jsx'
		// you can do import HomeComponent from './HomeComponent'
		extensions: ['', '.js', '.jsx','.json'] 
	},
	module : {
		loaders : [
			{
				test : /\.jsx?/,
				include : APP_DIR,
				exclude: /node_modules/,
				loader : 'babel'
			}
		]
	}
}; 

module.exports = config;

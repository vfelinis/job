var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: [
		'whatwg-fetch',
		'babel-polyfill',
		'./components/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist/js'),
		filename: 'bundle.js',
		publicPath: 'dist/js'
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
    	new webpack.optimize.UglifyJsPlugin({
	        beautify: false,
	        comments: false,
	        compress: {
	            sequences     : true,
	            booleans      : true,
	            loops         : true,
	            unused      : true,
	            warnings    : false,
	            drop_console: true,
	            unsafe      : true
	        }
    	}),
    	new webpack.optimize.OccurrenceOrderPlugin(),
    	new webpack.NoErrorsPlugin()
    ],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query:{
					presets: ['react', 'es2015', 'stage-0']
				}
			}
		]
	}
}
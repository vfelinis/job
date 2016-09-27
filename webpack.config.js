var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'babel-polyfill',
		'./components/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'dist'
	},
	plugins: [
    	new webpack.optimize.OccurenceOrderPlugin(),
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
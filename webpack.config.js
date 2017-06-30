var path = require('path');
var WebpackHtmlPlugin = require('html-webpack-plugin');

module.exports = {
		entry: {
			app: ['react-hot-loader/patch', './src/app/root.js']
		},
		output: {
			path: path.join(__dirname, 'dist'),
			filename: '[name].js'
		},
		resolve: {
			extensions: ['.js','.jsx']
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: ['/node_modules'],
					use: [
						'babel-loader'
					]
				}
			]
		},
		plugins: [
			new WebpackHtmlPlugin({
					template:'./src/app/index.html'
			})
		]
}

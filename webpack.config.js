const webpack = require('webpack'),
	path = require('path'),
	HtmlPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, "src"),
	dist: path.join(__dirname, "dist")
}

module.exports = function(env){
	if (env === 'development'){
		return {
			entry: PATHS.src + "/index.js",
			output: {
				filename: "[name].bundle.js",
				path: PATHS.dist
			},
			module: {
				rules: [
					{
						test: /\.css$/,
						use: [
							'style-loader',
							'css-loader',
							'postcss-loader'
						]
					}
				]
			},
			plugins: [
				new HtmlPlugin({
					template: PATHS.src + "/main.html",
					filename: "index.html"
				}),
				new webpack.ProvidePlugin({
					$: 'jquery',
					jQuery: 'jquery'
				})
			],
			devServer: {
				contentBase: path.join(__dirname, "dist"),
				watchContentBase: true,
				port: 9000
			}
		}
	} else if (env === 'production'){
		return {
			entry: PATHS.src + "/index.js",
			output: {
				filename: "[name].bundle.js",
				path: PATHS.dist
			},
			module: {
				rules: [
					{
						test: /\.css$/,
						use: ExtractTextPlugin.extract({
							use: [
								'css-loader',
								'postcss-loader'
							]
						})
					},
					{
						test: /\.js$/,
						exclude: [/node_modules/],
						use: [{
							loader: 'babel-loader',
							options: { presets: ['es2015'] }
						}]
					}
				]
			},
			plugins: [
				new HtmlPlugin({
					template: PATHS.src + "/main.html",
					filename: "index.html",
					minify: {
						collapseWhitespace: true,
						collapseInlineTagWhitespace: true,
						removeComments: true
					}
				}),
				new webpack.ProvidePlugin({
					$: 'jquery',
					jQuery: 'jquery'
				}),
				new ExtractTextPlugin('./styles.css'),
				new webpack.optimize.UglifyJsPlugin({})
			],
			devServer: {
				contentBase: path.join(__dirname, "dist"),
				watchContentBase: true,
				port: 9000
			}
		}
	}
}
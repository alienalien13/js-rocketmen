const webpack = require('webpack'),
	path = require('path'),
	HtmlPlugin = require('html-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, "src"),
	dist: path.join(__dirname, "dist")
}

module.exports = {
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
				'css-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			template: PATHS.src + "/main.html",
			filename: "index.html"
		})
	]
}
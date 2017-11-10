var webpack = require('webpack');
var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {

	entry: {
		main: [
			'./src/js/main.js',
			'./src/sass/style.scss'
			]
		},
	output: {
		path: path.resolve( __dirname, './dist' ),
		filename: 'bundle.js'
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: extractTextPlugin.extract( {
					use: [
						{
							loader: 'css-loader',
							options: {
								url: false,
								sourceMap: (! inProduction)
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: (! inProduction)
							}
						}
					]
				} )
			},
			// {
			// 	test: /\.css$/,
			// 	use: [ 'css-loader' ]
			// },
			{
				test: /\.js$/,
				exclude: '/node_modules',
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			}
		]
	},
	plugins: [
		new extractTextPlugin('style.css'),
		new webpack.LoaderOptionsPlugin({
			minimize: inProduction
		}),
		new LiveReloadPlugin()
	]

}

// Add production-specific config
if (inProduction) {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	);
}

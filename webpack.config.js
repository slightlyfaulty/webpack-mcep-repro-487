const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: process.env.NODE_ENV || 'development',

	entry: ['./src/index.js', './src/index.css'],

	devServer: {
		hot: true,
		writeToDisk: true,
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader, options: { hmr: !!process.env.WEBPACK_DEV_SERVER } },
					'css-loader',
				],
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin(),
	],
}

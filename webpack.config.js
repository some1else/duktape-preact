const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
	entry: {
		browser: [
			'./src/index.js',
		],
		duktapeHTML: [
			'./src/polyfills.js',
			'./src/index.duktape.string.js',
			'./src/polyfills/eventLoop.js',
		],
		duktapeJSON: [
			'./src/polyfills.js',
			'./src/index.duktape.json.js',
			'./src/polyfills/eventLoop.js',
		],
	},
	module: {
		rules: [
			{ test: /\.js$/, use: { loader: 'babel-loader', options: {
          presets: 
          [ '@babel/preset-env' ]
        } } },
			{ test: /\.html$/, use: "html-loader" }
		]
	},
	plugins: [
    new HtmlWebPackPlugin({
	      template: path.resolve(__dirname, 'src', 'index.html'),
	      chunks: ['browser']
    })
  ]
};
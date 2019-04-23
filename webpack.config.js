const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path")

const polyfills = [
	"./src/polyfills/array-includes.js",
	"./src/polyfills/Symbol.js",
	"./src/polyfills/setTimeout.js",
]

module.exports = {
	entry: {
		browser: ["./src/index.js"],
		duktapeHTML: [
			...polyfills,
			"./src/index.duktape.string.js",
			"./src/polyfills/eventLoop.js",
		],
		duktapeJSON: [
			...polyfills,
			"./src/index.duktape.json.js",
			"./src/polyfills/eventLoop.js",
		],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
				},
			},
			{ test: /\.html$/, use: "html-loader" },
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			chunks: ["browser"],
		}),
	],
}

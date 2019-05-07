const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path")

const polyfills = [
  "./src/polyfills/setTimeout.js",
  "./src/polyfills/es6-promise.js",
  "./src/polyfills/array-includes.js",
  "./src/polyfills/Symbol.js",
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
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      // Not necessary unless you consume a module using `createClass`
      "create-react-class": "preact-compat/lib/create-react-class",
      // Not necessary unless you consume a module requiring `react-dom-factories`
      "react-dom-factories": "preact-compat/lib/react-dom-factories",
    },
  },
}

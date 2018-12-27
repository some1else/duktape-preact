# Duktape + Prect prototype

Prototype build configuration which uses Webpack and Babel to transpile Preact into ES5, so that it runs on Duktape.js.

## Usage

Get dependencies with `$ yarn install`

Type `$ yarn start` to launch the webpack development server

`$ yarn build` or `$ ./build.sh` to output built js bundles into `./dist/`, and generate HTML, JSON and CBOR renders.

## Features

- Renders HTML with Duktape
- Renders JSON with Duktape
- Converts rendered JSON to CBOR
- Array.includes, setTimeout & Symbol polyfills

Contains `duk` (duktape) and `jsoncbor` binaries.

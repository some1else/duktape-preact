#!/bin/bash

rm -rf dist/*

node node_modules/webpack/bin/webpack.js --mode development 

./bin/duk dist/duktapeHTML.js > dist/render.html
./bin/duk dist/duktapeJSON.js > dist/render.json

cat dist/render.json | ./bin/jsoncbor -e > dist/render.cbor

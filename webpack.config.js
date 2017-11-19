var path =require('path');
var webpack = require('webpack');

module.exports = {
	entry: './entry.js',
	output: {path: __dirname, filename: './dist/bundle.js'},

	module: {
		loaders: [
		{
			test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
		},
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    },
    {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        loaders: [
          'file-loader?name=dist/img/[name].[ext]'
        ]}]
	}
	}
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = Object.assign(webpackConfig, {
    entry: './app/app',
    output: {
        pathinfo: true,
        publicPath: '/',
        path: path.join(__dirname, 'api/public'),
        filename: 'bundle.js'
    }
});

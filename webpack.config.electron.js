const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = Object.assign(webpackConfig, {
    entry: './app/app',
    devtool: 'eval-source-map',
    output: {
        path: path.join(__dirname, 'electron'),
        filename: 'renderer.js'
    }
});

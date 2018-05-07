const webpackConfig = require('./webpack.config');
const path = require('path');

module.exports = Object.assign(webpackConfig, {

    devtool: 'source-map',

    output: {
        pathinfo: true,
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    devServer: {
      proxy: {
        "*" : "http://localhost:9000"
      },
      historyApiFallback: true
    }

});
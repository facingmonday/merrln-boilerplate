const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

const dirNode = path.join(__dirname, "node_modules");
const dirApp = path.join(__dirname, 'app');
const dirApi = path.join(__dirname, 'api');
const dirAssets = path.join(__dirname, 'assets');
const IS_DEV = (process.env.NODE_ENV === 'dev');

const appHtmlTitle = 'SQ Account Portal';

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './app/app'
    ],
    output: {
        pathinfo: true,
        path: path.join(__dirname, 'server/public/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': dirApp,
            '~': dirApi,
            'DIR_ASSETS': dirAssets
        }
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        proxy: {
            "/auth/local": "http://localhost:9000",
            "/api": "http://localhost:9000"
        },
        open: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            IS_DEV: IS_DEV
        }),
        new webpack.ProvidePlugin({
            // lodash
            '_': 'lodash',
            'moment': 'moment'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'app/index.ejs'),
            title: appHtmlTitle
        })
        //new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    ///compact: true,
                    presets: ['es2015', 'react'],
                    "plugins": ["transform-class-properties"]
                }
            },
            // STYLES
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]_[local]--[hash:base64:5]'
                        }
                    },
                ]
            },

            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[name]_[local]--[hash:base64:5]'
                        }
                    },
                    "less-loader"
                ]
            },

            // IMAGES
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    }
};
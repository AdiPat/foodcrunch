const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//config.entry.unshift("webpack-dev-server/client?http://localhost:8080/");

module.exports = {
    entry: './app/js/main.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        contentBase: './dist',
        watchContentBase: true
        //hot: true
    },
    resolve: {
        alias: {
            //$: "jquery/src/jquery",
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [path.resolve(__dirname, "./src/app")],
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './dist/index.html'})
     ]
};
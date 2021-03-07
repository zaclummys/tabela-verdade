const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

dotenv.config();

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),

    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src'),
        },
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },

            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    'postcss-loader',
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new ESLintPlugin(),
        new HTMLWebpackPlugin({
            favicon: path.resolve(__dirname, '../src/favicon.png'),
            template: path.resolve(__dirname, '../src/index.html'),
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new webpack.EnvironmentPlugin({
            GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID
        }),
    ],
};

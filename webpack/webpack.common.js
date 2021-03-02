const path = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),

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
        new MiniCSSExtractPlugin(),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],

    performance: {
        hints: 'warning',
    },
};

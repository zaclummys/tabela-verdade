const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const TerserPlugin = require("terser-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
    plugins: [
        new WorkboxPlugin.GenerateSW({
            exclude: [/\.html$/],            
            skipWaiting: true,
            clientsClaim: true,
        }),
    ],
    performance: {
        hints: 'warning',
    },
});
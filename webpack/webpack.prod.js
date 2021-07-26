const { merge } = require('webpack-merge');

const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const common = require('./webpack.common.js');

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

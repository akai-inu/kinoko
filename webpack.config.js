const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const isProduction = (process.env.NODE_ENV === 'production');
const phaserBuildDir = path.resolve(__dirname, 'node_modules/phaser/build/custom');

module.exports = {
    entry: {
        app: './src/client/entry',
        vendor: ['PIXI', 'p2', 'phaser']
    },
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'public/build'),
      publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader']
            },
            {
                test: /\.ts$/,
                use: ['tslint-loader'],
                enforce: 'pre'
            },
            {
                test: /pixi\.js$/,
                use: [{
                    loader: 'expose-loader',
                    options: 'PIXI'
                }]
            },
            {
                test: /p2\.js$/,
                use: [{
                    loader: 'expose-loader',
                    options: 'p2'
                }]
            },
            {
                test: /phaser-split\.js$/,
                use: [{
                    loader: 'expose-loader',
                    options: 'phaser'
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public/build']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        })
    ],
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.js', '.ts'],
        alias: {
            'PIXI': path.join(phaserBuildDir, 'pixi.js'),
            'p2': path.join(phaserBuildDir, 'p2.js'),
            'phaser': path.join(phaserBuildDir, 'phaser-split.js')
        }
    }
};

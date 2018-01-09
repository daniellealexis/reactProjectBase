const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssNano = require('cssnano');

const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: () => [
            autoprefixer({
                browsers: ['last 2 versions'],
            }),
            cssNano({
                preset: ['default', {
                    svgo: {
                        exclude: true,
                    },
                }],
            }),
        ],
    },
};

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: {
        main: './src/js/entry/index.jsx',
    },
    output: {
        path: path.join(__dirname, 'app', 'dist', 'js'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /.jsx?$/, // Match both .js and .jsx
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env', 'react'],
                },
            },
            {
                test: /\.styl?$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        postCSSLoader,
                        'stylus-loader',
                    ],
                }),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('../styles/[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: true,
            beautify: false,
            dead_code: true,
        }),
    ],
    stats: {
        colors: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'app/src/js/components'),
            '@styles': path.resolve(__dirname, 'app/src/styles'),
        },
    },
    target: 'web',
    devtool: 'source-map',
};

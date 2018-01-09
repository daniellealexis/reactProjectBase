const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssNano = require('cssnano');
const extractCSS = new ExtractTextPlugin('dist/styles/[name].css');

const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: (loader) => [
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
    }
};

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: {
        main: './src/js/entry/index.js',
    },
    output: {
        path: path.join(__dirname, 'app', 'dist', 'js'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
               test: /\.js?$/,
               loader: 'babel-loader',
               options: {
                   presets: ['env'],
               }
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
        colors: true
    },
    target: 'web',
    devtool: 'source-map',
}

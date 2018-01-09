function configureWebpack(webpackConfigFunction) {
    var webpackConfig = require('./webpack.config');
    webpackConfig.entry = undefined; // karma will pass the proper argument for entry
    return webpackConfig;
}

module.exports = (config) => {
    config.set({
        frameworks: ['jasmine'],
        files: ['app/src/js/tests.webpack.js'],
        reporters: ['progress'],
        preprocessors: { 'app/src/js/tests.webpack.js': ['webpack'] },
        port: 9876, // default karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        autoWatch: false,
        concurrency: Infinity,
        webpack: configureWebpack(),
    });
};

// 'app/src/js/**/**/*.test.+(js|jsx)'

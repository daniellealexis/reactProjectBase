module.exports = (config) => {
    config.set({
        frameworks: ['jasmine'],
        files: ['app/src/tests/**/*.js'],
        reporters: ['progress'],
        port: 9876, // default karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        autoWatch: false,
        concurrency: Infinity,
    });
};

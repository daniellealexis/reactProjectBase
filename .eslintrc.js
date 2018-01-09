const path = require('path');

module.exports = {
    extends: 'airbnb',
    plugins: [
        'react',
        'import'
    ],
    env: {
        browser: true,
        jasmine: true,
    },
    rules: {
        'indent': ['error', 4],
        'max-len': ['warn', {
            code: 100,
            comments: 100,
            ignorePattern: '^\\s*(\'.*\'|".*"|`.*`)[,;]?$',
        }],
        'react/jsx-indent': ['error', 4],
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: 'webpack.config.js',
            }
            alias: [
                ['@components', path.resolve(__dirname, 'app/src/js/components/')],
                ['@styles', path.resolve(__dirname, 'app/src/styles/')],
            ],
        }
    }
};

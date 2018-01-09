module.exports = {
    extends: 'airbnb',
    plugins: [
        //'react',
        'import'
    ],
    // parser: 'babel-eslint',
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
    }
};

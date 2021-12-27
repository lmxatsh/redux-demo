module.exports = {
    env: {
        browser: true,
        node: true,
        jest: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        react: {
            version: '17.0.2',
        },
    },
}

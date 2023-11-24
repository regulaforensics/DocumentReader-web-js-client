module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    rules: {
        '@typescript-eslint/no-explicit-any': ['warn'],
    },
    overrides: [
        {
            files: ['./examples/**'],
            rules: {
                '@typescript-eslint/no-unused-vars': 'off',
            }
        },
    ]
};

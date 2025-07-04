import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    prettierRecommended,
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
        },
        ignores: ['dist/*', 'lib/*', '!.*'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
        },
    },
];

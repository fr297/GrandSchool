import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        ignores: [
            'node_modules/',
            'dist/',
            '.vite/',
            '*.config.*',
            'css/',
        ],
    },
    js.configs.recommended,
    prettier,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                window: true,
                document: true,
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
        },
    },
    {
        files: ['**/*.cjs', '**/*config*.{js,cjs,mjs}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: {
                require: 'readonly',
                module: 'readonly',
                __dirname: 'readonly',
                process: 'readonly',
            },
        },
    },
];
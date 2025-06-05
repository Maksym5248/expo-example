import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import tsPlugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactNativePlugin from 'eslint-plugin-react-native';

import eslintRecommended from '@eslint/js';

import prettierConfig from 'eslint-config-prettier';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
    {
        languageOptions: {
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: join(__dirname, 'tsconfig.json'),
            },
            parser,
            sourceType: 'module',
            globals: {
                browser: true,
                es2021: true,
                node: true,
                NodeJS: true,
                setTimeout: true,
                require: true,
            },
        },
		files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            import: importPlugin,
            '@typescript-eslint': tsPlugin,
            'jsx-a11y': jsxA11yPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'react-native': reactNativePlugin,
            prettier: prettierPlugin,
        },
        settings: {
            react: {
                version: 'detect',
            },
            "import/resolver": {
                "typescript": {
                    paths: join(__dirname, 'tsconfig.json'),
                    alwaysTryTypes: true
                }
            },
        },
        rules: {
            ...importPlugin.configs.recommended.rules,
            ...eslintRecommended.configs.recommended.rules,
            ...tsPlugin.configs.recommended.rules,
                    // ...tsPlugin.configs.recommendedRequiringTypeChecking.rules,
            ...jsxA11yPlugin.flatConfigs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            'prettier/prettier': 'error',
            'import/named': 0,
            'import/no-unresolved': 0,
            'import/order': [
                'error',
                {
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'builtin',
                            position: 'before',
                        },
                        {
                            pattern: '~/**',
                            group: 'internal',
                        },
                    ],
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    pathGroupsExcludedImportTypes: ['react'],
                    groups: [['builtin'], ['external'], ['internal'], ['parent', 'sibling'], ['object']],
                    'newlines-between': 'always',
                },
            ],
            'import/newline-after-import': 'error',
            'import/no-default-export': 'error',
            'import/prefer-default-export': 0,
            'import/no-self-import': 'error',
            'import/no-useless-path-segments': 'error',
            'import/extensions': 0,
            'no-underscore-dangle': 0,
            'no-mixed-operators': [
                'warn',
                {
                    groups: [
                        ['&', '|', '^', '~', '<<', '>>', '>>>'],
                        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                        ['&&', '||'],
                        ['in', 'instanceof'],
                    ],
                    allowSamePrecedence: false,
                },
            ],
            'no-unused-expressions': 0,
            'no-param-reassign': 0,
            'no-nested-ternary': 'error',
            'class-methods-use-this': 0,
            'no-promise-executor-return': 0,
            indent: ['error', 'tab'],
            'arrow-body-style': 0,
            'prefer-arrow-callback': 0,
            '@typescript-eslint/consistent-type-exports': 2,
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                    fixStyle: 'inline-type-imports',
                },
            ],
            '@typescript-eslint/no-floating-promises': 0,
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'typeLike',
                    format: ['PascalCase', 'UPPER_CASE'],
                },
            ],

            '@typescript-eslint/no-misused-promises': 0,
            '@typescript-eslint/no-unsafe-assignment': 0,
            '@typescript-eslint/require-await': 0,
            '@typescript-eslint/no-explicit-any': 0,
            '@typescript-eslint/no-unsafe-return': 0,
            '@typescript-eslint/no-unsafe-member-access': 0,
            '@typescript-eslint/no-unsafe-argument': 0,
            '@typescript-eslint/no-unsafe-call': 0,
            '@typescript-eslint/restrict-template-expressions': 0,
            '@typescript-eslint/ban-ts-comment': 0,
            '@typescript-eslint/restrict-plus-operands': 0,

            'react/no-unescaped-entities': 0,
            'react/jsx-props-no-spreading': 0,
            'react-hooks/exhaustive-deps': 1,
            'react/no-unknown-property': 0,
            'react/require-default-props': 0,
            'react/no-array-index-key': 0,
            'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
            'react/react-in-jsx-scope': 0,

            'react-native/no-unused-styles': 2,
            'react-native/split-platform-components': 2,
            'react-native/no-inline-styles': 2,
            'react-native/no-color-literals': 2,
            'react-native/no-raw-text': 2,
            'react-native/no-single-element-style-arrays': 2,
            'react/prop-types': 0,
            '@typescript-eslint/no-require-imports': 0,
            ...prettierConfig.rules,
        },
        ignores: ['eslint.config.js', 'babel.config.js', 'lint-staged.config.js', '.prettierrc.js', 'index.js'],
    },
];

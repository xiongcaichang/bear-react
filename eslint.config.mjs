import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
	pluginJs.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			sourceType: 'module',
			parser: parser
		},
		plugins: {
			'@typescript-eslint': tseslint
		},

		rules: {
			'no-unused-vars': [
				'warn',
				{
					vars: 'all',
					args: 'after-used',
					caughtErrors: 'all',
					ignoreRestSiblings: false,
					reportUsedIgnorePattern: false
				}
			],
			'no-console': 'warn',
			quotes: ['error', 'single'],
			'@typescript-eslint/no-unused-vars': 'warn'
		}
	}
];

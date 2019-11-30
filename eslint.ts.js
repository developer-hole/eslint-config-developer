module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'./.eslintrc.json',
		'plugin:@typescript-eslint/recommended'
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint'
	],
	rules: {
		'no-extra-parens': 'off',
		'@typescript-eslint/no-extra-parens': ["warn", "all", {
			"nestedBinaryExpressions": false
		}],
		'@typescript-eslint/interface-name-prefix': 0,
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'valid-jsdoc': 'off',
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'comma',
				requireLast: false
			},
			singleline: {
				delimiter: 'comma',
				requireLast: false
			},
			overrides: {
				interface: {
					multiline: {
						delimiter: 'semi',
						requireLast: true
					},
					singleline: {
						delimiter: 'semi',
						requireLast: true
					}
				}
			}
		}]
	}
};
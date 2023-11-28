module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  // 'extends': 'eslint:recommended',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['**/*/*.test.js', '**/*/*.test.ts'],
      plugins: ['jest'],
      extends: [
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 'no-restricted-syntax': [
    //   'error',
    //   'LabeledStatement',
    //   'WithStatement',
    // ],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
  },
};

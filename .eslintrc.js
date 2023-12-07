module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
      'eslint:recommended',
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
  ignorePatterns: ['node_modules/', 'webpack.config.js'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    semi: 'off',
  },
};

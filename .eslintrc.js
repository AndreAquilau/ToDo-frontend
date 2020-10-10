module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'react/display-name': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/alt-text': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'no-alert': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      pragma: 'React', // Pragma to use, default to "React"
      // fragment: 'React.Fragment', // Fragment to use, default to "React.Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      flowVersion: '0.53', // Flow version
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
  },
};

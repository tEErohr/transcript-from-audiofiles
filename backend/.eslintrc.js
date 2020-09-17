module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  globals: {},
  rules: {
    '@typescript-eslint/no-explicit-any': [0, 'never'],
    '@typescript-eslint/explicit-module-boundary-types': [0, 'never'],
    '@typescript-eslint/explicit-function-return-type': [0, 'never'],
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'local',
        argsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'prettier/prettier': 'error',
    camelcase: [
      0,
      {
        properties: 'never',
      },
    ],
    'key-spacing': [
      2,
      {
        align: 'value',
      },
    ],
    // in contrast to the old lint configuration, enforce the absence of dangling commas
    'comma-dangle': [0, 'all'],
    // allow unnamed anonymous functions
    'func-names': 0,
    // the airbnb toolchain presupposes concatenation and prepending 'use strict'
    strict: 0,
    // deactivate enforced indentation, activate at own peril
    indent: [
      0,
      2,
      {
        SwitchCase: 1,
      },
    ],
    // allows us to sort functions and classes in a logical order, rather than the inverse inclusion order
    'no-use-before-define': 1,
    // allows to assign to argument properties, but not to arguments
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    // Go for a max-len, but set the default higher. Teams may switch the default at their own peril
    'max-len': [2, 150],
    // nope
    semi: ['error', 'never'],
    // allow spaces to define objects and vars
    'no-multi-spaces': [
      0,
      {
        exceptions: {
          Property: true,
          VariableDeclarator: true,
        },
      },
    ],
    'space-before-function-paren': ['error', 'never'],
    // allow test libraries to live in devDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['test/**'],
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
  },
  ignorePatterns: ['build', 'dist'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolve': {
      moduleDirectory: ['node_modules', 'src'],
    },
  },
};

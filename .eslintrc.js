module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
    },
    parserOptions: {
      parser: '@babel/eslint-parser',
      requireConfigFile: false,
      sourceType: 'module',
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
    ],
    rules: {
      // Ваши правила ESLint
    },
  };
  
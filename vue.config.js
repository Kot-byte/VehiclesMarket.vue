const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'https://clck.ru/35rmYM',
        changeOrigin: true,
        pathRewrite: { '^/api': '/api/cars-test?search=2323&per_page=9&page=1' },
      },
    },
  },
});

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/~f1214638',
  devServer: {
    proxy: {
      '^/api/.*': {
        target: 'http://localhost:3000'
      }
    }
  },
})

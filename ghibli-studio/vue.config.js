module.exports = {
  devServer: {
    proxy: {
      '/api/clima': {
          target: 'https://api.darksky.net',
          changeOrigin: true,
          pathRewrite: {
            '^/api/clima': ''
          }
      }
    }
  }
}
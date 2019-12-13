module.exports = {
    runtimeCompiler: true,
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
      // open: process.platform === 'darwin',
      // host: 'localhost',
      port: 8071,
      open: true, //配置自动启动浏览器
      proxy: {
        '/api': {
          target: 'http://118.24.43.196:9999/api', //对应自己的接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
     },
  }
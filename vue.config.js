const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭语法检查(命名不规范)
  lintOnSave:false,
  devServer: {
    //保存代码，页面内容自动刷新
    open: true,
    //设置端口
    port: 8080,
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // },
    //设置跨域
    proxy:{
      '/api': {
        target: 'http://localhost:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
})

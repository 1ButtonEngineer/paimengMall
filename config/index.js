// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),  //定义编译环境
    //相当于cd 当前文件目录   cd..    然后编译输入的index.html文件
    index: path.resolve(__dirname, '../dist/index.html'),   
    assetsRoot: path.resolve(__dirname, '../dist'), //编译输出的静态资源路径
    assetsSubDirectory: 'static', 
    assetsPublicPath: '/',
    productionSourceMap: true,
   
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'] //使用gizp的压缩文件的扩展名
  },
  dev: {
    env: require('./dev.env'),
    port: 8081, 
    assetsSubDirectory: 'static', //除了index.html之外的静态资源要存放的路径
    assetsPublicPath: '/', //代表了打包后, index.html里面引用资源相对地址
    proxyTable: {
        // '/goods': 'http://localhost:3001/users'
        '/api':{
            target:'http://127.0.0.1:3001',//接口域名(服务器监听的端口) 
            changeOrigin: true, //当这个值为true,就将请求头的http,替换成是target
            pathRewrite: {
              '^/api': '',  // 若target中没有/api、这里又为空，则404；
            }
        }
        //proxy代理   一种跨域方式   将接到http请求发送给一个代理服务器,再由服务器发送给目标服务器
        //原因: url请求有同源限制,而服务器之间不存在同源限制,而本机也是一个服务器
    },
    cssSourceMap: false
  }
}

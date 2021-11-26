var config = require('../config')   //导入conf配置文件,它定义了开发或者生产环境所需参数和的资源
if (!process.env.NODE_ENV) process.env.NODE_ENV = config.dev.env //如果没有定义，默认使用development(开发环境)
var path = require('path')  //nodejs路径引入
var express = require('express') //nodejs开发框架express
var webpack = require('webpack') //静态模块打包工具,并且拥有大量插件
var opn = require('opn')  //打开终端，此对象用于在默认浏览器上打开连接(open url)
//此插件用来代理请求，只能用于开发环境,目的主要解决跨域请求api
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')//引入基本配置

//是否设置了端口号,如果没有使用使用conf中的默认端口
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// 解决开发环境跨域问题
var proxyTable = config.dev.proxyTable

//创建nodejs的express开发框架实例
var app = express()

//把配置参数传递到webpack方法中,返回一个编译对象
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// 当html-webpack-plugin模板发生变化,调用hotMiddleware重新加载
compiler.plugin('compilation', function (compilation) {
  //webpack任何一个插件都plugin这个方法,里面可以传递钩子函数,用来在各个阶段做特殊处理
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    //每当html-webpack-plugin创建好项目,强制刷新网页
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
//调用这个组件解决单页面应用, 点击刷新按钮或其他搜索定位页面404错误
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)


// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var apiServer = express() 
var bodyParser = require('body-parser') //对post请求的，请求体进行解析
apiServer.use(bodyParser.urlencoded({ extended: true }))
apiServer.use(bodyParser.json())
var apiRouter = express.Router()
var fs = require('fs')
apiRouter.route('/:apiName')
.all(function (req, res) {
  fs.readFile('./db.json', 'utf8', function (err, data) {
    if (err) throw err
    var data = JSON.parse(data)
    if (data[req.params.apiName]) {
      res.json(data[req.params.apiName])  
      console.log(res.json(data[req.params.apiName]) )
    }
    else {
      res.send('no such api name')
    }
    
  })
})

//router中的路由对象都会匹配到/api后面去
apiServer.use('/api', apiRouter);
console.log(apiRouter + '11111111111111111')
apiServer.listen(port + 1, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + (port + 1) + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
  opn(uri)
})

// module.exports = app.listen(port, function (err) {
//   if(err) {
//     console.log(err)
//     return 
//   }

//   var url = 'http://127.0.0.1:' + port;
//   open(url)
// })

/* eslint-disable */
require('eventsource-polyfill')
//webpack-dev-middleware是一个内建的express服务器
//webpack-hot-middleware是一个中间层插件,用于热加载更新网页
//webpack-hot-middleware实现浏览器的无刷新的加载
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})

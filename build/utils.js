var path = require('path')
var config = require('../config')
//将css文件从bundle.js中抽取出来，防止样式打包时,在js页面引起样式混乱
var ExtractTextPlugin = require('extract-text-webpack-plugin')

//判断当前是生产环境还是开发环境
exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
    //nodeJs path提供的用于处理文件路径的工具:
    //path和path.posix,前者返回完整路径  后者返回完整路径的相对根路径
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  //option没有值就是空对象
  options = options || {}
  function generateLoaders (loaders) {
    var sourceLoader = loaders.map(function (loader) {
      var extraParamChar
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?')
        extraParamChar = '&'
      } else {
        loader = loader + '-loader'
        extraParamChar = '?'
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
    }).join('!')

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
    } else {
      return ['vue-style-loader', sourceLoader].join('!')
    }
  }

  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus'])
  }
}


//主要处理的是import这种导入方式的类型文件的打包，上线的export.cssLoaders是为这一步服务
exports.styleLoaders = function (options) {
  var output = []
  //生成不同css文件的load对象
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    //提取文件的loader
    var loader = loaders[extension]
    //将最终的结果放入output数组
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output
}

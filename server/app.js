var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

//定义app, 生成一个express实例
var app = express();

//存储识图文件目录, 即模板文件view的目录
//_dirname是一个全局变量,他表示的时当前文件所在的目录
app.set('views', path.join(__dirname, 'views'));
//设置视图模板引擎是jade
app.set('view engine', 'jade');

//加载日志中间件
app.use(logger('dev'));
//加载解析json中间件
app.use(bodyParser.json());
//加载解析urlencoded请求的中间件
app.use(bodyParser.urlencoded({ extended: false }));
//设置解析cookie的中间件
app.use(cookieParser());
//设置public文件夹为存放静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req,res,next) { // 拦截请求
  if(req.cookies.userId){   //判断当前cookie中是否有存储的值
    next();
  }else{
      console.log("url:"+req.originalUrl+ "req.originalUrl"+"eeeeeeeeeeeeeeeeeeee");
      if(req.originalUrl.indexOf('/users/login')>-1 || req.originalUrl.indexOf('/users/logout')>-1 || req.originalUrl.indexOf('/list')>-1 || req.originalUrl.indexOf('/getDetails')>-1 || req.originalUrl.indexOf('/users/register')>-1 || req.originalUrl.indexOf('/users/userExist')>-1 || req.originalUrl.indexOf('/searchData')>-1){
          console.log('我应经登陆了')
          next();
      }else{
          res.json({
            status:'10001',
            msg:'当前未登录',
            result:''
          });
      }
  }
});

//加载路由
app.use('/', index);
app.use('/users', users);

//记载错误404, 并转发到错误处理器的
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//开发环境下的错误处理器, 将错误信息渲染error模板并显示浏览器中
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

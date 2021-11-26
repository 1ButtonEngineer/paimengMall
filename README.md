## 这是一个基于vue全家桶+node.js+express+mysql实现的家居网站





如果觉得对您有帮助，您可以在右上角给我个star支持一下，谢谢！

### 项目结构
如下图所示：


**注**：该项目是真实的请求后台api。server为后端数据接口项目结构。

mysql：**连接Mysql代码在server/conf/conf.js**大家只要将配置信息改成自己的就行。

表创建：**sql语句在server/malldata.sql**文件内大家可以直接复制插入就ok。我的数据库名是**malldata**。
### 项目运行


# 安装依赖：
vue:
....
cd vueMall(进入项目文件下)
npm install （安装依赖）

express:(进入项目文件下)
cd server
npm install（安装依赖）

# 本地开发，开启服务器，浏览器访问http://localhost:8081,express监听的是3001端口http://localhost:3001 (因为项目运行需要占用一个接口，所以express需要另外的运行接口)
项目运行:
npm start

express运行:
npm start

注：如果你是第一次使用vue和express记得全局安装下vue-cli和express, 本项目依赖于vue-cli和express
- **vue-cli**

  键入命令：npm install -g vue-cli
- **express**
 
  键入命令：cnpm i -g express-generator

### 项目说明
- 用到的技术栈

    vue-cli2 + vue2.0 + vue-router + vuex + axios + stylus + scss + node.js + es6 + express + mysql
- 实现功能

```
    - 登录注册
    - 商品详情
    - 购物车管理
    - 地址管理
    - 模拟支付（由于调用不了支付接口）
    - 订单管理
    
```
- 功能说明
```
    - 基于vue2.0
    - 使用vue-cli脚手架搭建项目
    - 使用vue-router实现路由切换
    - 使用vuex进行状态管理
    - 使用axios进行数据请求
    - stylus和scss编写样式
    - 联动滚动借助了vue-infinite-scroll插件和图片懒加载vue-lazyload插件
    - Express编写后台api
    - Mysql实现数据存储
 ```
